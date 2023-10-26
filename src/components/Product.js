import { Component } from "react";

import AddButton from './AddButton'
import PriceComponent from './PriceComponent'

import '../styles/product.css'

class Product extends Component {
  render() {
    const { product, addToCart } = this.props
    return (
      <div className='main-container'>
        <img className='image-container'
          src={product.image}
          alt={product.name} />
        <h5 className='title-container'>
          {product.name}
        </h5>
        <div className='text-container'>
          <PriceComponent amount={product.price} />
        </div>
        <AddButton onClick={() => addToCart(product)}>
          Add to cart
        </AddButton>
      </div>
    )
  }
}

export default Product