import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions'
import dayjs from 'dayjs';
import { userAction } from '../reducers/user/user.action';



var firebaseConfig = {
    apiKey: "AIzaSyCxTLs-NcCfEhOH_daWCq8qIpY7kmUrcqY",
    authDomain: "expense-tracker-react-1d0bd.firebaseapp.com",
    databaseURL: "https://expense-tracker-react-1d0bd.firebaseio.com",
    projectId: "expense-tracker-react-1d0bd",
    storageBucket: "expense-tracker-react-1d0bd.appspot.com",
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

export const checkUserInDatabase = async (userData) => {
  if(!userData) return;
  const userCollectionRef = db.collection('users').doc(userData.uid);
  const userSnapshot = await userCollectionRef.get();
  if(!userSnapshot.exists ){
      const { email, photoURL, displayName } = userData;
      const createdAt = new Date();
      userCollectionRef.set({
        createdAt,
        email,
        displayName: displayName,
        photoURL: photoURL,
        categoryList: {},
        months: {},
        balanceHistory: [],
        currentAccountBalance: 0
      })
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
