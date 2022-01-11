// const dotenv = require('dotenv').config()

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
	apiKey: process.env.REACT_APP_KEY,
	authDomain: 'shop-clothing-7b14d.firebaseapp.com',
	projectId: 'shop-clothing-7b14d',
	storageBucket: 'shop-clothing-7b14d.appspot.com',
	messagingSenderId: '432067087369',
	appId: '1:432067087369:web:72c612d61c7959dfc3fcd8',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
