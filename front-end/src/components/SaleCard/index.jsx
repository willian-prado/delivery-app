import React from 'react';
import PropTypes from 'prop-types';

const SaleCard = ({ id, status, saleDate, totalPrice, deliveryAddress }) => (
  <li>
    <div>{`Pedido ${id}`}</div>
    <div>{status}</div>
    <div>{saleDate}</div>
    <div>{`R$ ${totalPrice}`}</div>
    {deliveryAddress && <div>{deliveryAddress}</div>}
  </li>
);

SaleCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
};
export default SaleCard;
