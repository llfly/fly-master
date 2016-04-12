import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Checkboxes from './Checkboxes';

class FormTest extends Component {
	state = {
		checkValues: []
	}
	handleCheck = (e) => {
		let checkValues = this.state.checkValues.slice();
		let newVal = e.target.value;
		let index = checkValues.indexOf(newVal);
		if (index == -1) {
			checkValues.push(newVal)
		} else {
			checkValues.splice(index, 1);
		}
		console.log(checkValues);
		this.setState({
			checkValues: checkValues,
		})
	}
	render() {
		return <div >
			< h3 > 多选按钮 < /h3> < Checkboxes handleCheck = {this.handleCheck} /> < /div>
	}
}

export default FormTest;