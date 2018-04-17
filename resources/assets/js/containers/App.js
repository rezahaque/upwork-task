import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Notification from './Notification';

export default class App extends Component {
	render() {
		return (
			<Notification/>
		);
	}
}

if (document.getElementById('app')) {
	ReactDOM.render(<App/>, document.getElementById('app'));
}
