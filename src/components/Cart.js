import { Component } from "react";

import BubbleAlert from './BubbleAlert'
import CartDetail from './CartDetail'

import '../styles/cart.css'

class Cart extends Component {
  render() {
    const { cart, isShowCart, showCart } = this.props
    const quantity = cart.reduce((acc, element) => acc + element.quantity, 0)
    return (
      <div>
        <span className="bubbleAlertPosition">
          {/* Conditional Render */}
          {quantity !== 0
            ? <BubbleAlert value={quantity} />
            : null
          }
        </span>
        <button onClick={showCart} className="cart">
          Cart
        </button>
        {isShowCart ?
          <CartDetail cart={cart} />
          :
          null
        }
      </div>

    )
  }
}

export default Cart