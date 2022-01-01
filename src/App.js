import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import Shop from './components/shop/Shop'
import Header from './components/header/Header'

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/shop' element={<Shop />} />
			</Routes>
		</>
	)
}

export default App
