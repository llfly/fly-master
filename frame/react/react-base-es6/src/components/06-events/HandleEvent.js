'use strict';

import React, { Component } from 'react';

class HandleEvent extends Component {

  state = { liked: false }

  handleClick = (event) => {
    this.setState({liked: !this.state.liked});
  }

  render() {
    let text = this.state.liked ? '喜欢' : '不喜欢';

    return (
      <p onClick={this.handleClick}>
        我 {text} 你.
      </p>
    );
  }
}

export default HandleEvent;
// 更多事件 http://reactjs.cn/react/docs/events.html#form-events