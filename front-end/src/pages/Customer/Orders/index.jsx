import React from 'react';
import OrderTable from '../../../components/OrderTable';

const CustomerOrders = () => (
  <main>
    <OrderTable
      page="sellerDetails"
      orders={ [
        {
          item: 1,
          description: 'Banana',
          quantity: 3,
          price: '13,99',
          totalValue: '99,99',
        },
      ] }
    />
  </main>
);

export default CustomerOrders;
