import React from 'react';
import PropTypes from 'prop-types';

const SaleCard = ({ order }) => {
  const { id, status, saleDate, totalPrice, deliveryAddress } = order;

  return (
    <li>
      <div data-testid={ id.dataTestId }>{`Pedido ${id.text}`}</div>
      <div data-testid={ status.dataTestId }>{status.text}</div>
      <div data-testid={ saleDate.dataTestId }>{saleDate.text}</div>
      <div data-testid={ totalPrice.dataTestId }>{`R$ ${totalPrice.text}`}</div>
      {deliveryAddress && (
        <div data-testid={ deliveryAddress.dataTestId }>{deliveryAddress.text}</div>
      )}
    </li>
  );
};

const orderItemPropTypes = {
  dataTestId: PropTypes.string, text: PropTypes.string,
};

SaleCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.shape(orderItemPropTypes),
    status: PropTypes.shape(orderItemPropTypes),
    saleDate: PropTypes.shape(orderItemPropTypes),
    totalPrice: PropTypes.shape(orderItemPropTypes),
    deliveryAddress: PropTypes.shape(orderItemPropTypes),
  }).isRequired,
};
export default SaleCard;
