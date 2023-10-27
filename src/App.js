
import { Component } from 'react';

import NavBar from './components/NavBar'
import Layout from './components/Layout'
import ImageCarousel from './components/ImageCarousel'
import Products from './components/Products'

import './i18n';

class App extends Component {
  state = {
    products: [
      { id: 1, name: 'Cushion 1', price: 1500, src: '/products/cushion1.png' },
      { id: 2, name: 'Cushion 2', price: 2500, src: '/products/cushion2.png' },
      { id: 3, name: 'Cushion 3', price: 3500, src: '/products/cushion3.png' },
      { id: 4, name: 'Cushion 4', price: 2000, src: '/products/cushion4.png' },
      { id: 5, name: 'Cushion 5', price: 2500, src: '/products/cushion5.png' },
      { id: 6, name: 'Cushion 6', price: 3000, src: '/products/cushion6.png' },
    ],
    cart: [
      // { id: 1, name: 'Cushion 1', price: 1500, src: '/products/cushion1.png', quantity: 1 },
    ],
    isShowCart: false,
    imagesCarousel: [
      { id: 1, name: 'image 1', src: '/imageCarousel/imageCarousel1.png' },
      { id: 2, name: 'image 2', src: '/imageCarousel/imageCarousel2.png' },
      { id: 3, name: 'image 3', src: '/imageCarousel/imageCarousel3.png' },
    ]
  }

  addToCart = (product) => {
    const { cart } = this.state
    if (cart.find(element => element.id === product.id)) {
      const newCart = cart.map(element => element.id === product.id
        ? ({
          ...element,
          quantity: element.quantity + 1
        })
        : element)
      return this.setState({ cart: newCart })
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      })
    })
  }

  showCart = () => {
    if (!this.state.cart.length) {
      return
    }
    this.setState({
      isShowCart: !this.state.isShowCart
    })
  }

  render() {
    const { imagesCarousel, products, cart, isShowCart } = this.state
    return (
      <div>
        <NavBar
          cart={cart}
          isShowCart={isShowCart}
          showCart={this.showCart}
        />
        <ImageCarousel imagesCarousel={imagesCarousel} />
        <Layout>
          <Products
            addToCart={this.addToCart}
            products={products}
          />
        </Layout>

      </div>
    )
  }
}

export default App;
