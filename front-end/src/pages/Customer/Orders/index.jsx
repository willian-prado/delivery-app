import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import SaleCard from '../../../components/SaleCard';
import { axiosGetAll } from '../../../helpers/axios';
import formatOrders from '../../../helpers/formatOrders';

const CustomerOrders = () => {
  const [customer] = useState(JSON.parse(localStorage.getItem('user')));
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { sales } = await axiosGetAll('http://localhost:3001/checkout', customer.token);
      setOrders(sales);
      // try {
      //   jwt.verify(user.token, 'secret_key');
      // } catch (err) {
      //   localStorage.removeItem('user');

      //   navigate('/login');
      // }
    };

    fetchOrders();
  }, [customer.token]);

  return (
    <>
      <header>
        <Navbar
          name={ customer.name }
          role={ customer.role }
        />
      </header>
      <h1>Customer Orders</h1>
      <ul>
        {
          orders.length && formatOrders(orders, 'customerOrders').map((order, index) => (
            <SaleCard
              key={ index }
              order={ order }
              role={ customer.role }
            />
          ))
        }

      </ul>
    </>
  );
};

export default CustomerOrders;
