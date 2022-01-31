import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import dataTestIds from '../../../dataTestIds';

const dataTestIdsBodyRow = {
  sellerDetails: {
    item: dataTestIds[59],
    name: dataTestIds[60],
    quantity: dataTestIds[61],
    price: dataTestIds[62],
    totalValue: dataTestIds[63],
  },
  customerCheckout: {
    item: dataTestIds[22],
    name: dataTestIds[23],
    quantity: dataTestIds[24],
    price: dataTestIds[25],
    totalValue: dataTestIds[26],
    remove: dataTestIds[27],
  },
  customerDetails: {
    item: dataTestIds[41],
    name: dataTestIds[42],
    quantity: dataTestIds[43],
    price: dataTestIds[44],
    totalValue: dataTestIds[45],
    remove: dataTestIds[46],
  },
};

const BodyRow = ({ item, page, order, remove }) => (
  <tr>
    <td data-testid={ dataTestIdsBodyRow[page].item + item }>
      {item + 1}
    </td>
    <td data-testid={ dataTestIdsBodyRow[page].name + item }>
      {order.name}
    </td>
    <td data-testid={ dataTestIdsBodyRow[page].quantity + item }>
      {order.quantity}
    </td>
    <td data-testid={ dataTestIdsBodyRow[page].price + item }>
      {order.price.split('.').join(',')}
    </td>
    <td data-testid={ dataTestIdsBodyRow[page].totalValue + item }>
      {String((order.quantity * order.price).toFixed(2)).split('.').join(',')}
    </td>
    {remove && (
      <td data-testid={ dataTestIdsBodyRow[page].remove + item }>
        <Button>Remove</Button>
      </td>
    )}
  </tr>
);

BodyRow.propTypes = {
  item: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
  order: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.string,
  }).isRequired,
  remove: PropTypes.bool.isRequired,
};

export default BodyRow;
