import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/homepage/HomePage'
import Shop from './pages/shop/Shop'
import SigninSignout from './pages/sign-in-and-sign-out/SigninSignout'
import Header from './components/header/Header'

import { auth } from './firebase/firebase'

class App extends Component {
	state = {
		currentUser: null,
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user })

			console.log(user)
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {
		return (
			<>
				<Header currentUser={this.state.currentUser} />
				<Routes>
					<Route exact path='/' element={<HomePage />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/signin' element={<SigninSignout />} />
				</Routes>
			</>
		)
	}
}

export default App
