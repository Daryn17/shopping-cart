import { Component } from "react";

import '../styles/bubbleAlert.css'

class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) { return '' }
    return n > 9 ? '9+' : n
  }
  render() {
    return (
      <span className="bubbleAlert">
        {this.getNumber(10)}
      </span>
    )
  }
}

export default BubbleAlert