import { Component } from "react";

import Logo from './Logo'
import Cart from './Cart'

import '../styles/navBar.css'

class NavBar extends Component {
  render() {
    return (
      <nav className="navBar">
        <Logo srcLogo='/logo/logo.png' logoName='logo' />
        <Cart />
      </nav>
    )
  }
}

export default NavBar 