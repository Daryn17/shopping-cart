import { Component } from "react";
import '../styles/addButton.css'

class AddButton extends Component {
  render() {
    return (
      <button className='btn-info' {...this.props} />
    )
  }
}

export default AddButton