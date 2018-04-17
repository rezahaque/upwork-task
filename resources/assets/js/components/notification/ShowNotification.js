import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ShowNotification extends Component {
	static propTypes = {
		text: PropTypes.string
	};

	render() {
		if (!this.props.text) return null;

		return (
			<div className="alert alert-primary">
				<h5 className="alert-heading">Message received from server:</h5>
				<div>{this.props.text}</div>
			</div>
		);
	}
}
