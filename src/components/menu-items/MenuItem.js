import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/menu-item.styles.scss'

const MenuItems = ({ title, imageUrl, size, linkUrl }) => {
	let navigation = useNavigate()

	return (
		<div
			className={`${size} menu-item`}
			onClick={() => {
				navigation(`${linkUrl}`)
			}}>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>

			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	)
}

export default MenuItems
