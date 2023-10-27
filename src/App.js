
import { Component } from 'react';

import NavBar from './components/NavBar'
import Layout from './components/Layout'
import ImageCarousel from './components/ImageCarousel'
import Products from './components/Products'

import './i18n';

class App extends Component {
  state = {
    products: [
      { id: 1, name: 'Cushion 1', price: 1500, image: '/products/cushion1.png' },
      { id: 2, name: 'Cushion 2', price: 2500, image: '/products/cushion2.png' },
      { id: 3, name: 'Cushion 3', price: 3500, image: '/products/cushion3.png' },
      { id: 4, name: 'Cushion 4', price: 2000, image: '/products/cushion4.png' },
      { id: 5, name: 'Cushion 5', price: 2500, image: '/products/cushion5.png' },
      { id: 6, name: 'Cushion 6', price: 3000, image: '/products/cushion6.png' },
    ],
    imageCarousel: [
      { id: 1, name: 'image 1', src: '/imageCarousel/imageCarousel1.png' },
      { id: 2, name: 'image 2', src: '/imageCarousel/imageCarousel2.png' },
      { id: 3, name: 'image 3', src: '/imageCarousel/imageCarousel3.png' },
    ]
  }
  render() {
    return (
      <div>
        <NavBar />
        <ImageCarousel imageCarousel={this.state.imageCarousel} />
        <Layout>
          <Products
            addToCart={() => console.log('addToCart log')}
            products={this.state.products}
          />
        </Layout>

      </div>
    )
  }
}

export default App;
