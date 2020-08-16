import firebase from 'firebase/app';
import uniqid from 'uniqid';
import { db } from '../../firebase/firebase';

export function depositSubmit ({user, currentMonth, amount, typeOfPayment, category, handleClose, description, handleAlertOpen}) {
    db.doc(`users/${user.id}`).get().then(snapshot => {
            const revenues = !snapshot.data().months?.[currentMonth]?.revenues ? 0 : snapshot.data().months[currentMonth].revenues;
            const expenses = !snapshot.data().months?.[currentMonth]?.expenses ? 0 : snapshot.data().months[currentMonth].expenses;
            const costs = !snapshot.data().months?.[currentMonth]?.costs ? 0 : snapshot.data().months[currentMonth].costs;
            db.doc(`users/${user.id}`).set({
                months: {
                    [currentMonth]: {
                        expenses: expenses,
                        revenues: revenues + parseInt(amount),
                        costs: costs + parseInt(amount)
                }},
                historyBalance: firebase.firestore.FieldValue.arrayUnion({
                    id: uniqid(),
                    name: typeOfPayment, 
                    amount: parseInt(amount), 
                    date: firebase.firestore.Timestamp.fromDate(new Date()), 
                    description: description, 
                    accountBalance: snapshot.data().currentAccountBalance + parseInt(amount)
                }),
                currentAccountBalance: snapshot.data().currentAccountBalance + parseInt(amount)
            }, {merge: true})
    })
    .then(() => {
        handleClose();
        handleAlertOpen('The deposit was successful', 'success')
    })
    .catch((e) => {
        handleAlertOpen('The deposit was unsuccessful', 'error')
        console.log(e)
    })
    handleClose();
}


export function withdrawSubmit({user, currentMonth, amount, typeOfPayment, category, handleClose, description, handleAlertOpen}){
    db.doc(`users/${user.id}`).get().then(snapshot => {
        const revenues = !snapshot.data().months?.[currentMonth]?.revenues ? 0 : snapshot.data().months[currentMonth].revenues;
        const expenses = !snapshot.data().months?.[currentMonth]?.expenses ? 0 : snapshot.data().months[currentMonth].expenses;
        const costs = !snapshot.data().months?.[currentMonth]?.costs ? 0 : snapshot.data().months[currentMonth].costs;
        db.doc(`users/${user.id}`).set({
          categoryList: {
                [category.toLowerCase()]: {
                    ...user.categoryList[category.toLowerCase()],
                    amountSpent: user.categoryList[category.toLowerCase()].amountSpent + parseInt(amount)
          }},
          months: {
          [currentMonth]: {
            expenses: expenses + parseInt(amount),
            revenues: revenues,
            costs: costs - parseInt(amount)
          }},
          historyBalance: firebase.firestore.FieldValue.arrayUnion({
            id: uniqid(),
            name: typeOfPayment, 
            amount: parseInt(amount), 
            date: firebase.firestore.Timestamp.fromDate(new Date()), 
            description: description, 
            accountBalance: snapshot.data().currentAccountBalance - parseInt(amount)
          }),
          currentAccountBalance: snapshot.data().currentAccountBalance - parseInt(amount)
        }, {merge: true})
    })
    .then(() => {
        handleClose();
        handleAlertOpen('The payout was successful.', 'success');
    })
    .catch((e) => {
        handleClose();
        handleAlertOpen(`The payout was unsuccessful: ${e.message}`)
    })
}
