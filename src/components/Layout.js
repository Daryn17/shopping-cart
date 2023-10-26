import { Component } from "react";
import '../styles/layout.css'

class Layout extends Component {
  render() {
    return (
      <div className="first-layout">
        <div className="second-layout">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout