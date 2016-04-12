import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

class HandleDOMComponent extends Component {
  componentDidMount(){
    console.log('this:',this);
    console.log('this.ref:',this.refs);

    // 两种方式都可以获取到元素
    let ele = findDOMNode(this.refs.content);
    let ele2 = this.refs.content;

    // 如果想用 jquery，那么这是个好时机
    console.log( ele );
    console.log( ele.innerHTML );
    console.log( ele2.innerHTML );


  }

  render(){
    return (
      <div>
        <h3 ref='title'>来吧，一起操作DOM</h3>
        <div ref='content'>这是我DOM元素里面的内容</div>
      </div>
    );
  }
}

export default HandleDOMComponent;
//为了和浏览器交互，你将需要对DOM节点的引用。每一个挂载的React组件有一个getDOMNode()方法，你可以调用这个方法来获取对该节点的引用。
//getDOMNode()仅在挂载的组件上有效（也就是说，组件已经被放进了DOM中）。
//如果你尝试在一个未被挂载的组件上调用这个函数（例如在创建组件的render()函数中调用getDOMNode()），将会抛出异常。