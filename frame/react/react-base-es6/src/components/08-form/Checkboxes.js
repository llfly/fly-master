
import React, { Component } from 'react';

class Checkboxes extends Component {
  render(){
      return <span>
          我设置了checked属性为true，你在 UI 上没法修改A
          <input onChange={this.props.handleCheck}  name="goodCheckbox" type="checkbox" value="A" checked="true"/>
          实际上他还是会触发onChange事件B
          <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="B" />
          C
          <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="C" />
      </span>
  }
}

export default Checkboxes;
