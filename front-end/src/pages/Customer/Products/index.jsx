import React from 'react';
import Navbar from '../../../components/Navbar';

const CustomerProducts = () => {
  const [user] = React.useState(JSON.parse(localStorage.getItem('user')));
  return (
    <main>
      <Navbar
        name={ user.name }
        role={ user.role }
        orders
      />

      <h1>Customer Products</h1>
    </main>
  );
};

export default CustomerProducts;
