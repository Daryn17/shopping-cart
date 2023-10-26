import { Component } from "react";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCentSign } from '@fortawesome/free-solid-svg-icons';
import '../styles/product.css'

const PriceComponent = ({ amount }) => {
  const { t } = useTranslation();

  const getCurrencyIcon = (currency) => {
    switch (currency) {
      case 'USD':
        return <FontAwesomeIcon icon={faDollarSign} />;
      case 'ES':
        return <FontAwesomeIcon icon={faCentSign} />;
      default:
        return null;
    }
  };

  return (
    <span>
      {getCurrencyIcon(t('currency'))} {amount}
    </span>
  );
}

class Product extends Component {
  render() {
    const { product } = this.props
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
        <button className='btn-info'>
          Add to cart
        </button>
      </div>
    )
  }
}

export default Product