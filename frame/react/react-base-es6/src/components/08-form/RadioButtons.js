
import React, { Component } from 'react';

// 定义单选框按钮组
class RadioButtons extends Component {
  saySomething(){
      alert("我是一个很棒的单选框按钮组");
  }
  render(){
      return <span>
          A
          <input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="A"/>
          在组件内设置defaultChecked默认选中 B
          <input onChange={this.props.handleRadio} name="goodRadio" type="radio" defaultChecked value="B"/>
          C
          <input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="C"/>
      </span>
  }
}

export default RadioButtons;
