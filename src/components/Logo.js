import { Component } from "react";

import '../styles/logo.css'

class Logo extends Component {
  render() {
    const { srcLogo, logoName } = this.props
    return (
      <div>
        <img src={srcLogo} alt={logoName} />
      </div>
    )
  }
}

export default Logo