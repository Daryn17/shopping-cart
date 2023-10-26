import { Component } from "react";
import Product from './Product'

class Prdocuts extends Component {
	render() {
		const { products, addToCart } = this.props
		return (
			<div className="products-container">
				{products.map(product => (
					<Product
						addToCart={addToCart}
						product={product}
						key={product.id}
					/>
				))}
			</div>
		)
	}
}

export default Prdocuts