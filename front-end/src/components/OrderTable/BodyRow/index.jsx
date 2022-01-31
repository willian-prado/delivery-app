import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import dataTestIds from '../../../dataTestIds';

const dataTestIdsBodyRow = {
  sellerDetails: {
    item: dataTestIds[59],
    description: dataTestIds[60],
    quantity: dataTestIds[61],
    price: dataTestIds[62],
    totalValue: dataTestIds[63],
  },
  customerCheckout: {
    item: dataTestIds[22],
    description: dataTestIds[23],
    quantity: dataTestIds[24],
    price: dataTestIds[25],
    totalValue: dataTestIds[26],
    remove: dataTestIds[27],
  },
  customerDetails: {
    item: dataTestIds[41],
    description: dataTestIds[42],
    quantity: dataTestIds[43],
    price: dataTestIds[44],
    totalValue: dataTestIds[45],
    remove: dataTestIds[46],
  },
};

const BodyRow = ({ page, order, remove }) => (
  <tr>
    <td data-testid={ dataTestIdsBodyRow[page].item + order.item }>
      {order.item}
    </td>
    <td data-testid={ dataTestIdsBodyRow[page].description + order.item }>
      {order.description}
    </td>
    <td data-testid={ dataTestIdsBodyRow[page].quantity + order.item }>
      {order.quantity}
    </td>
    <td data-testid={ dataTestIdsBodyRow[page].price + order.item }>
      {order.price}
    </td>
    <td data-testid={ dataTestIdsBodyRow[page].totalValue + order.item }>
      {order.totalValue}
    </td>
    {remove && (
      <td data-testid={ dataTestIdsBodyRow[page].remove + order.item }>
        <Button>Remove</Button>
      </td>
    )}
  </tr>
);

BodyRow.propTypes = {
  page: PropTypes.string.isRequired,
  order: PropTypes.shape({
    item: PropTypes.number,
    description: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.string,
    totalValue: PropTypes.string,
  }).isRequired,
  remove: PropTypes.bool.isRequired,
};

export default BodyRow;
