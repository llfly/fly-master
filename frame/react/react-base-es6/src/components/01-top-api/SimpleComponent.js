import React, { Component } from 'react';

/**
 * 最简单的一个组件
 */
class SimpleComponent extends Component {
  render(){
    //return里只能有一个父元素
    //return <div>hello,react</div><div>hello,es6</div>
    //写注释需要用{}
    return <div> hello,react. hello,es6 {/*test*/}</div>;
  }
}
//创建组件类
//es5中通过createClass实现
//es6中通过extends Component实现
//组件实现了 render() 方法，该方法返回一个子级。
//render() 方法是必须的。
//当调用的时候，会检测 this.props 和 this.state，返回一个单子级组件。
//该子级组件可以是虚拟的本地 DOM 组件（比如 <div /> 或者 React.DOM.div()），也可以是自定义的复合组件。
//你也可以返回 null 或者 false 来表明不需要渲染任何东西。
//实际上，React 渲染一个 <noscript> 标签来处理当前的差异检查逻辑。
//当返回 null 或者 false 的时候，this.getDOMNode() 将返回 null。
//render() 函数应该是纯粹的，也就是说该函数不修改组件 state，每次调用都返回相同的结果，不读写 DOM 信息，也不和浏览器交互（例如通过使用 setTimeout）。
//如果需要和浏览器交互，在 componentDidMount() 中或者其它生命周期方法中做这件事。保持 render() 纯粹，可以使服务器端渲染更加切实可行，也使组件更容易被理解。



// 看看React给我们提供了哪些顶层组件
console.log( React );
//React.Component 使用ES6的class创建组件用的API
//React.createClass 使用ES5的class创建组件用的API
//React.PropTypes //包含了能与组件 propTypes 对象共用的类型，用于验证传入组件的 props。
//React.Children 操作 map/forEach/count/only children工具类
export default SimpleComponent;
