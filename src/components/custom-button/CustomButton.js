import React from 'react'

import '../../styles/custom-button.styles.scss'

const CustomButton = ({ children, isGoogleButton, ...otherprops }) => {
	return (
		<button
			className={`${isGoogleButton ? 'google-sign-in' : ''} custom-button`}
			{...otherprops}>
			{children}
		</button>
	)
}

export default CustomButton
