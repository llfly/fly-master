import React, { Component } from 'react';

class StateDemo extends Component {
  state = {
    secondsElapsed:0
  }

  tick(){
    this.setState({secondsElapsed:this.state.secondsElapsed + 1});
  }

  componentDidMount(){
    this.interval = setInterval( this.tick.bind(this), 1000 );
  }

  componentWillMount(){
    clearInterval(this.interval);
  }

  render(){
    return(
      <div>目前已经计时：{this.state.secondsElapsed}</div>
    )
  }
}
//state && setState
//用状态控制组件变化 可以把一个组件看做一个状态机, 每一次状态对应于组件的一个 ui
//getInitialState  在组件挂载之前调用一次。返回值将会作为 this.state 的初始值。


//生命周期方法
//componentWillMount 挂载
//componentDidMount 挂载
//componentWillReceiveProps 更新
//shouldComponentUpdate 更新
//componentWillUpdate 更新
//componentDidUpdate 更新
//componentWillUnmount 移除

export default StateDemo;
