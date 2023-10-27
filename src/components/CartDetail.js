import { Component } from "react";

import '../styles/cartDetail.css'

class CartDetail extends Component {
  render() {
    const { cart } = this.props
    return (
      <div className="cartDetail">
        <ul className="productContainer">
          {cart.map(product =>
            <li key={product.id} className="product">
              <img src={product.src} alt={product.name} />
              {product.name} <span>{product.quantity}</span>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default CartDetail