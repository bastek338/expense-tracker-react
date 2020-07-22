import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import dayjs from 'dayjs';

var firebaseConfig = {
    apiKey: "AIzaSyCxTLs-NcCfEhOH_daWCq8qIpY7kmUrcqY",
    authDomain: "expense-tracker-react-1d0bd.firebaseapp.com",
    databaseURL: "https://expense-tracker-react-1d0bd.firebaseio.com",
    projectId: "expense-tracker-react-1d0bd"
  };

  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const checkUserInDatabase = async (userData, firstName, lastName) => {
  if(!userData) return;
  const { uid, email, photoURL } = userData;
  const displayName = userData.displayName ? userData.displayName : `${firstName} ${lastName}`;
  const userCollectionRef = db.collection('users').doc(uid);
  const userSnapshot = await userCollectionRef.get();
  if(!userSnapshot.exists){
    const createdAt = new Date();
    userCollectionRef.set({
      createdAt,
      email,
      displayName: displayName,
      photoURL: photoURL,
      categoryList: {},
      months: {}
    }, {merge: true})
  }

  return userCollectionRef;
}

const GoogleProvider = new firebase.auth.GoogleAuthProvider();

GoogleProvider.setCustomParameters({
  'login_hint': 'user@example.com',
  'prompt': 'select_account'
})


export const googleSignIn = () => {
  auth.signInWithPopup(GoogleProvider)
  .then(res => console.log(res))
  .catch(err => console.log(err.message))
}

const FacebookProvider = new firebase.auth.FacebookAuthProvider();

FacebookProvider.setCustomParameters({
  'display': 'popup'
})

export const facebookSignIn = () => {
  auth.signInWithPopup(FacebookProvider)
  .then(user => console.log(user))
  .catch(err => console.log(err.message))
}

const GitHubProvider = new firebase.auth.GithubAuthProvider();

export const gitHubSignIn = () => {
  auth.signInWithPopup(GitHubProvider)
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

// export const addDataToCategoryAndMonth = ({path, user, payment, amount, options, category}) => {
//   db.doc(path).get().then(snapshot => {
//       switch(payment){
//         case 'deposit': 
//               if(!snapshot.data().months[currentMonth]){
//                 db.doc(path).set({
//                   months: {
//                   ...user.months,
//                   [currentMonth]: {
//                     ...user.months[currentMonth],
//                     expenses: 0,
//                     revenues: parseInt(amount)
//                   }
//                 }}, options)
//               } else {
//                 db.doc(path).set({
//                   months: {
//                   ...user.months,
//                   [currentMonth]: {
//                     ...user.months[currentMonth],
//                     revenues: user.months[currentMonth].revenues + parseInt(amount)
//                   }
//                 }}, options)
//               }
//           break;
//           case 'withdraw':
//               if(!snapshot.data().months[currentMonth]) {
//                 db.doc(path).set({
//                   categoryList: {
//                     ...user.categoryList,
//                     [category.toLowerCase()]: {
//                         ...user.categoryList[category.toLowerCase()],
//                         amountSpent: user.categoryList[category.toLowerCase()].amountSpent + parseInt(amount)
//                     }
//                   }, 
//                   months: {
//                     ...user.months,
//                   [currentMonth]: {
//                     ...user.months[currentMonth],
//                     revenues: 0,
//                     expenses: parseInt(amount)
//                   }
//                 }}, options)
//               } else {
//                 db.doc(path).set({
//                   categoryList: {
//                     ...user.categoryList,
//                     [category.toLowerCase()]: {
//                         ...user.categoryList[category.toLowerCase()],
//                         amountSpent: user.categoryList[category.toLowerCase()].amountSpent + parseInt(amount)
//                     }
//                   }, 
//                   months: {
//                   ...user.months,
//                   [currentMonth]: {
//                     ...user.months[currentMonth],
//                     expenses: user.months[currentMonth].expenses + parseInt(amount)
//                   }
//                 }}, options)
//               }
//           break;
//           default:
//             console.log('Sorry, something went wrong. Check correct params in ur func.')
//       }
//   })
// }
