import React,{ Component } from 'react';
import Button from '../components/Button/Button';

import 'bootstrap/dist/css/bootstrap.css';
import './App.less';

class App extends Component {
	render(){
		return(
			<div className="app text-center">
				<Button />
				<div className="tip"></div>
				<span className="glyphicon glyphicon-asterisk"></span>
			</div>
		);
	}
}

export default App;