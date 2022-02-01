import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SaleCard = ({ order, role }) => {
  const { id, status, saleDate, totalPrice, deliveryAddress } = order;

  return (
    <Link to={ `/${role}/orders/${id.text}` }>
      <li>
        <div data-testid={ `${id.dataTestId}${id.text}` }>{`Pedido ${id.text}`}</div>
        <div data-testid={ `${status.dataTestId}${id.text}` }>{status.text}</div>
        <div data-testid={ `${saleDate.dataTestId}${id.text}` }>{saleDate.text}</div>
        <div data-testid={ `${totalPrice.dataTestId}${id.text}` }>
          {`R$ ${totalPrice.text}`}
        </div>
        { deliveryAddress && (
          <div data-testid={ `${deliveryAddress.dataTestId}${id.text}` }>
            {deliveryAddress.text}
          </div>
        )}
      </li>
    </Link>
  );
};

const orderItemPropTypes = {
  dataTestId: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SaleCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.shape(orderItemPropTypes),
    status: PropTypes.shape(orderItemPropTypes),
    saleDate: PropTypes.shape(orderItemPropTypes),
    totalPrice: PropTypes.shape(orderItemPropTypes),
    deliveryAddress: PropTypes.shape(orderItemPropTypes),
  }).isRequired,
  role: PropTypes.string.isRequired,
};
export default SaleCard;
