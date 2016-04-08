import React, { Component, PropTypes } from 'react';

class PropTypesDemo extends Component {

  static propTypes = {
    // 可以声明 prop 为指定的 JS 基本类型。默认情况下，这些 prop 都是可传可不传的。
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,


    // 所有可以被渲染的对象：数字，字符串，DOM 元素或包含这些类型的数组。
    optionalNode: PropTypes.node,
    // React 元素
    optionalElement: PropTypes.element,
    // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
    //optionalMessage: PropTypes.instanceOf(SimpleComponent),
    // 用 enum 来限制 prop 只接受指定的值。
    optionalEnum: PropTypes.oneOf(['News', 'Photos']),
    // 指定的多个对象类型中的一个
    optionalUnion: PropTypes.oneOfType([
    	PropTypes.string,
    	PropTypes.number,
    	//PropTypes.instanceOf(SimpleComponent)
    ]),
    // 指定类型组成的数组
    optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

    // 指定类型的属性构成的对象
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),

    // 特定形状参数的对象
    optionalObjectWithShape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
    }),

    // 任意类型加上 `isRequired` 来使 prop 不可空。
    title: PropTypes.string.isRequired,

    // 不可空的任意类型
    //requiredAny: PropTypes.any.isRequired,

    // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
    // customProp: function(props, propName, componentName) {
    //   if (!/matchme/.test(props[propName])) {
    //     return new Error('Validation failed!');
    //   }
    // }
    //单个子级
    //children : PropTypes.element.isRequired
  }
  //默认 Prop 值
  static defaultProps = {
      title: '默认的title'
  }

  render(){
    return <b {...this.props}>{this.props.title}</b>
  }
}
//propTypes 对象允许验证传入到组件的 props。
//React.PropTypes 提供很多验证器 (validator) 来验证传入数据的有效性。
//当向 props 传入无效数据时，JavaScript 控制台会抛出警告。
export default PropTypesDemo;
