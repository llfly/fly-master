
import React, { Component } from 'react';

class Checkboxes extends Component {
  render(){
      return <span>
          我设置了checked属性为true，你在UI上没法修改A
          <input onChange={this.props.handleCheck}  name="goodCheckbox" type="checkbox" value="A" checked="true"/>
          B
          <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="B" />
          C
          <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="C" />
      </span>
  }
}

export default Checkboxes;
