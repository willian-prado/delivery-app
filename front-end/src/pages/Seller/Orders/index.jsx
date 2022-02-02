import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import SaleCard from '../../../components/SaleCard';
import { axiosGetAll } from '../../../helpers/axios';
import formatOrders from '../../../helpers/formatOrders';

const SellerOrder = () => {
  const [seller] = useState(JSON.parse(localStorage.getItem('user')));
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { sales } = await axiosGetAll('http://localhost:3001/checkout', seller.token);
      setOrders(sales);
      // try {
      //   jwt.verify(user.token, 'secret_key');
      // } catch (err) {
      //   localStorage.removeItem('user');

      //   navigate('/login');
      // }
    };

    fetchOrders();
  }, [seller.token]);

  seller.role = 'seller';

  return (
    <>
      <header>
        <Navbar
          name={ seller.name }
          role={ seller.role }
        />
      </header>
      <h1>Seller Orders</h1>
      <ul>
        {
          orders.length && formatOrders(orders, 'sellerOrders').map((order, index) => (
            <SaleCard
              key={ index }
              order={ order }
              role={ seller.role }
            />
          ))
        }

      </ul>
    </>
  );
};

export default SellerOrder;
