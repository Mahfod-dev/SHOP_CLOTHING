import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/homepage/HomePage'
import Shop from './pages/shop/Shop'
import SigninSignout from './pages/sign-in-and-sign-out/SigninSignout'
import Header from './components/header/Header'

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/signin' element={<SigninSignout />} />
			</Routes>
		</>
	)
}

export default App
