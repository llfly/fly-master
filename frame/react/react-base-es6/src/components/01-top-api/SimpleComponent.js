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

// 看看React给我们提供了哪些顶层组件
console.log( React );
//React.Component 使用ES6的class创建组件用的API
//React.createClass 使用ES5的class创建组件用的API
//React.PropTypes //包含了能与组件 propTypes 对象共用的类型，用于验证传入组件的 props。
//React.Children 操作 map/forEach/count/only children工具类
export default SimpleComponent;
