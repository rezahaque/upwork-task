import React, {Component} from 'react';
import AddNotificationForm from '../components/notification/AddNotificationForm';
import ShowNotification from '../components/notification/ShowNotification';

export default class Notification extends Component {
	state = {
		text: ''
	};

	onCreateNotificationSuccess = (notification) => {
		this.setState({
			text: notification.text
		});
	};

	onCreateNotificationError = (err) => {
		// Clear the state
		this.setState({
			text: ''
		});
	};

	render() {
		return (
			<div className="container">
				<div className="row justify-content-center align-items-center mt-3 mt-md-5">
					<div className="col-12 col-md-8 col-lg-5">
						<ShowNotification
							text={this.state.text}
						/>
						<AddNotificationForm
							onSuccess={this.onCreateNotificationSuccess}
							onError={this.onCreateNotificationError}
						/>
					</div>
				</div>
			</div>
		);
	}
}