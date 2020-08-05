import firebase from 'firebase/app';
import uniqid from 'uniqid';
import { db } from '../../firebase/firebase';

export function depositSubmit ({user, currentMonth, amount, typeOfPayment, category, handleClose, description}) {
    console.log(user)
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
                    accountBalance: snapshot.data().accountBalance + parseInt(amount)
                }),
                accountBalance: snapshot.data().accountBalance + parseInt(amount)
            }, {merge: true})
    })
    handleClose();
}


export function withdrawSubmit({user, currentMonth, amount, typeOfPayment, category, handleClose, description}){
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
            accountBalance: snapshot.data().accountBalance - parseInt(amount)
          }),
          accountBalance: snapshot.data().accountBalance - parseInt(amount)
        }, {merge: true})
    })
    .then(() => handleClose())
    .catch((e) => console.log(e.message))
}
