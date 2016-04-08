import React, { Component } from 'react';

class LifeCycle extends Component {

  props = {
    value: '开始渲染'
  }

  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps');
    this.setState({
        value: nextProps.value
    });
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps,nextState){
    console.log('componentWillUpdate');
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  render() {
    console.log('render');
    return <span>{this.props.value}</span>
  }

  componentDidMount() {
      console.log('componentDidMount');
  }

  componentDidUpdate(prevProps,prevState) {
      console.log('componentDidUpdate');
  }

  componentWillUnmount(prevProps,prevState) {
      console.log('componentWillUnmount');
  }
}
//生命周期方法
//挂载 componentWillMount
//服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用。如果在这个方法内调用 setState，render() 将会感知到更新后的 state，将会执行仅一次，尽管 state 改变了。


//挂载 componentDidMount
//在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。在生命周期中的这个时间点，组件拥有一个 DOM 展现，你可以通过 this.getDOMNode() 来获取相应 DOM 节点。
//如果想和其它 JavaScript 框架集成，使用 setTimeout 或者 setInterval 来设置定时器，或者发送 AJAX 请求，可以在该方法中执行这些操作。


//更新 componentWillReceiveProps
//在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
//用此函数可以作为 react 在 prop 传入之后， render() 渲染之前更新 state 的机会。老的 props 可以通过 this.props 获取到。在该函数中调用 this.setState() 将不会引起第二次渲染。
//注意：对于 state，没有相似的方法： componentWillReceiveState。将要传进来的 prop 可能会引起 state 改变，反之则不然。如果需要在 state 改变的时候执行一些操作，请使用 componentWillUpdate。

//更新 shouldComponentUpdate
// 在接收到新的 props 或者 state，将要渲染之前调用。该方法在初始化渲染的时候不会调用，在使用 forceUpdate 方法的时候也不会。
// 如果确定新的 props 和 state 不会导致组件更新，则此处应该 返回 false。
//如果 shouldComponentUpdate 返回 false，则 render() 将不会执行，直到下一次 state 改变。（另外，componentWillUpdate 和 componentDidUpdate 也不会被调用。）
//默认情况下，shouldComponentUpdate 总会返回 true，在 state 改变的时候避免细微的 bug，但是如果总是小心地把 state 当做不可变的，在 render() 中只从 props 和 state 读取值，此时你可以覆盖 shouldComponentUpdate 方法，实现新老 props 和 state 的比对逻辑。
//如果性能是个瓶颈，尤其是有几十个甚至上百个组件的时候，使用 shouldComponentUpdate 可以提升应用的性能。
//
//
//更新 componentWillUpdate
///在接收到新的 props 或者 state 之前立刻调用。在初始化渲染的时候该方法不会被调用。
//使用该方法做一些更新之前的准备工作。
//注意：你不能在刚方法中使用 this.setState()。如果需要更新 state 来响应某个 prop 的改变，请使用 componentWillReceiveProps。



//更新 componentDidUpdate
//在组件的更新已经同步到 DOM 中之后立刻被调用。该方法不会在初始化渲染的时候调用。
//使用该方法可以在组件更新之后操作 DOM 元素。


//移除 componentWillUnmount
//在组件从 DOM 中移除的时候立刻被调用。
//在该方法中执行任何必要的清理，比如无效的定时器，或者清除在 componentDidMount 中创建的 DOM 元素。


export default LifeCycle;
