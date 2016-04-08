import React, { Component } from 'react';


//props是调用组件的时候传递进去的数据，一般用于组件树数据传递
//通过 this.props 可以获取传递给该组件的属性值，还可以通过定义 getDefaultProps 来指定默认属性值（这是ES5的写法，ES6定义组件的默认static props可以直接写props）
//Use a static property to define defaultProps instead.
class PropsDemo extends Component {
  static props = {
  	title:'我是静态的'
  }
  static defaultProps = {
    age :'test'
  }
  props = {
    ttt: '这是默认的title属性值'
  }
  props2 = {
  	title:"我是山寨的"
  }
  render(){
  	console.log(PropsDemo.props);
    console.log(this.props);
    console.log(this.props2);
    console.log(this.props.age);
    console.log(this.props.ttt);
    return <b>{this.props.title}</b>
  }
}
// 直接使用props或static props 无法在内部重新赋值，即使外部不传入，依然访问不到
// es5可以通过getDefaultProps方法 es6可以通过 static defaultProps

//getDefaultProps
//在组件类创建的时候调用一次，然后返回值被缓存下来。
//如果父组件没有指定 props 中的某个键，则此处返回的对象中的相应属性将会合并到 this.props （使用 in 检测属性）。!
//该方法在任何实例创建之前调用，因此不能依赖于 this.props。另外，getDefaultProps() 返回的任何复杂对象将会在实例间共享，而不是每个实例拥有一份拷贝。

export default PropsDemo;
