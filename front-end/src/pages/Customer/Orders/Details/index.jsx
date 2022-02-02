import React from 'react';
import Navbar from '../../../../components/Navbar';

const CustomerOrderDetails = () => {
  const [customer] = React.useState(JSON.parse(localStorage.getItem('user')));

  return (
    <>
      <header>
        <Navbar name={ customer.name } role={ customer.role } />
      </header>

      <main>
        <h1>Customer Order Details</h1>
      </main>
    </>
  );
};

export default CustomerOrderDetails;
