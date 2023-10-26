import { Component } from "react";

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCentSign } from '@fortawesome/free-solid-svg-icons';

const PriceComponentCurrencyIcon = ({ amount }) => {
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

class PriceComponent extends Component {
  render() {
    const { amount } = this.props
    return (
      <PriceComponentCurrencyIcon amount={amount} />
    )
  }
}

export default PriceComponent