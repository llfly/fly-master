import React, { Component } from 'react';

// 1. 组件命名遵循驼峰命名，首字母大写
class ComponentDemo extends Component {
  render(){
    {
      /*
      2. 这是代码注释
      也可以是多行，需要用{}扩起来
      */
    }
    //从父级获取属性this.props
    console.log(this);//this指向自身  _reactInternalInstance，context，props，refs，getDOMNode()，isMounted()，replaceProps()，replaceState()，setProps()，state，updater
    console.log(this.props);//Object {name: "llfly"}
    //this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点
    //this.props.children 的值有三种可能：
    //如果当前组件没有子节点，它就是 undefined ;
    //如果有一个子节点，数据类型是 object ；
    //如果有多个子节点，数据类型就是 array 。所以，处理 this.props.children 的时候要小心。
    //React 提供一个工具方法 React.Children 来处理 this.props.children 。
    //可以用 React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object。
    const name = this.props.name;

    // 3. render 方法 return 回来的根元素只能是一个，超过会报错
    // 4. { } 里面可以写JS代码
    return (
      <div>
        hello, {name ? name : "我是默认的"}
      </div>
    );
  }
}

export default ComponentDemo;
