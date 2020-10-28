import React from 'react';
import {connect} from 'react-redux'

import Dice from './Dice';

const dice = ["one", "two"]

class PageWrapper extends React.Component {

	render() {

		return (
			<div id="PageWrapper">
				{dice.map(number => {
					return (
						<Dice number={number}/>
					)
				})}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(PageWrapper)