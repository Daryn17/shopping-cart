import { Component } from "react";

import Logo from './Logo'
import Cart from './Cart'

import '../styles/navBar.css'

class NavBar extends Component {
  render() {
    const { cart, isShowCart, showCart } = this.props;
    return (
      <nav className="navBar">
        <Logo srcLogo='/logo/logo.png' logoName='logo' />
        <Cart
          cart={cart}
          isShowCart={isShowCart}
          showCart={showCart}
        />
      </nav>
    )
  }
}

export default NavBar 