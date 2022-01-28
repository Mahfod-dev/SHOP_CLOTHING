import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SigninSignout from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'

import { auth } from './firebase/firebase.utils'

const App = () => {
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setCurrentUser(user)
			console.log(currentUser)
		})
	}, [currentUser])

	return (
		<>
			<Header currentUser={currentUser} />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/signin' element={<SigninSignout />} />
			</Routes>
		</>
	)
}

export default App
