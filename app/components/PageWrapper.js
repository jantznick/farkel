import React from 'react';
import {connect} from 'react-redux'

class PageWrapper extends React.Component {

	render() {

		return (
			<div id="PageWrapper" />
		)
	}
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(PageWrapper)