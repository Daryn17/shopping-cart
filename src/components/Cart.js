import { Component } from "react";

import BubbleAlert from './BubbleAlert'

import '../styles/cart.css'

class Cart extends Component {
  render() {
    return (
      <div>
        <span className="bubbleAlertPosition">
          <BubbleAlert />
        </span>
        <button className="cart">
          Cart
        </button>
      </div>

    )
  }
}

export default Cart