import React, { Component } from 'react';

class Button extends Component {
  handleClick(){
    alert('hello,world');
  }
  render(){
    const style = require('./Button.less');

    return (
      <button className="my-button" onClick={this.handleClick.bind(this)}>
        点击
      </button>
    );
  }
}

export default Button;