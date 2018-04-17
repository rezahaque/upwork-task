import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class AddNotificationForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			text: '',
			errors: {}
		};
	}

	static propTypes = {
		onSuccess: PropTypes.func,
		onError: PropTypes.func
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		this.createNotificationRequest();
	};

	createNotificationRequest = () => {
		this.setState({loading: true});
		axios.post('api/notifications', {
			text: this.state.text
		}).then(res => res.data)
			.then(res => {
				this.setState({
					loading: false,
					text: '',
					errors: {}
				});

				this.props.onSuccess && this.props.onSuccess(res);
			})
			.catch(e => {
				this.setState({
					loading: false,
					...e.response.data
				});

				this.props.onFailure && this.props.onFailure(e.response.data);
			});
	};

	onInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	render() {
		return (
			<div className="card">
				<div className="card-header">Add New Notification</div>

				<div className="card-body">
					<form onSubmit={this.onFormSubmit}>
						<div className="form-group">
							<input
								type="text"
								name="text"
								className={this.state.errors.text ? 'form-control is-invalid' : 'form-control'}
								value={this.state.text}
								onChange={this.onInputChange}
								disabled={this.state.loading}
								autoFocus={true}
							/>
							{this.state.errors.text && (
								<div className="invalid-feedback">
									{this.state.errors.text[0]}
								</div>
							)}
						</div>
						<button type="submit" className="btn btn-primary" disabled={this.state.loading}>
							{this.state.loading ? <span>Submitting</span> : <span>Submit</span>}
						</button>
					</form>
				</div>
			</div>
		);
	}
}
