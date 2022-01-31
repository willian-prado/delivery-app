import React from 'react';
import PropTypes from 'prop-types';
import BodyRow from './BodyRow';

const OrderTable = ({ page, orders, remove }) => (
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor unitário</th>
        <th>Sub-total</th>
        {remove && (
          <th>Remover Item</th>
        )}
      </tr>
    </thead>
    <tbody>
      {
        orders.map((order) => (
          <BodyRow
            key={ order }
            page={ page }
            order={ order }
            remove={ remove }
          />
        ))
      }
    </tbody>
  </table>
);

OrderTable.propTypes = {
  page: PropTypes.string.isRequired,
  orders: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.number,
    description: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.string,
    totalValue: PropTypes.string,
  })).isRequired,
  remove: PropTypes.bool.isRequired,
};

export default OrderTable;
