import React, { Component } from 'react'

import FormInput from '../form-input/FormInput'
import CustomButton from '../../components/custom-button/CustomButton'

import '../../styles/sign-in.styles.scss'

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.setState({ email: '', password: '' })
	}

	handleChange = (e) => {
		const { value, name } = e.target

		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have a account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						label='Email'
						required
						handleChange={this.handleChange}
					/>

					<FormInput
						type='password'
						name='password'
						label='Password'
						value={this.state.password}
						handleChange={this.handleChange}
					/>

					<CustomButton type='submit'>Sign in</CustomButton>
				</form>
			</div>
		)
	}
}

export default SignIn
