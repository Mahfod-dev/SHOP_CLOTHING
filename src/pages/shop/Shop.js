import React, { Component } from 'react'
import { SHOP_DATA } from './shop.data'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'

console.log(SHOP_DATA)

class Shop extends Component {
	state = {
		collections: SHOP_DATA,
	}

	render() {
		return (
			<div>
				{this.state.collections.map(({ id, ...otherCollections }) => {
					return <PreviewCollection key={id} {...otherCollections} />
				})}
			</div>
		)
	}
}

export default Shop
