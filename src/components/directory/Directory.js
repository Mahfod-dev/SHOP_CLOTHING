import React, { Component } from 'react'
import '../../styles/directory.styles.scss'
import MenuItem from '../menu-items/MenuItem'

import { sections } from './directory.data'

class Directory extends Component {
	state = {
		sections: sections,
	}
	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ id, ...otherSectionsProps }) => {
					return <MenuItem key={id} {...otherSectionsProps} />
				})}
			</div>
		)
	}
}

export default Directory
