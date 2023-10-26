
import { Component } from 'react';
import './i18n';
import Products from './components/Products'

class App extends Component {
  state = {
    products: [
      { id: 1, name: 'Cushion 1', price: 1500, image: '/products/cushion1.png' },
      { id: 2, name: 'Cushion 2', price: 2500, image: '/products/cushion2.png' },
      { id: 3, name: 'Cushion 3', price: 3500, image: '/products/cushion3.png' },
    ]
  }
  render() {
    return (
      <div>
        <Products
          addToCart={() => console.log('addToCart log')}
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App;
