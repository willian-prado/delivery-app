import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import moment from 'moment';
import axios from 'axios';
import Navbar from '../../../../components/Navbar';
import { axiosGetAll } from '../../../../helpers/axios';
import OrderTable from '../../../../components/OrderTable';
import dataTestIds from '../../../../dataTestIds';
import Button from '../../../../components/Button';

const CustomerOrderDetails = () => {
  const [customer] = React.useState(JSON.parse(localStorage.getItem('user')));
  const [order, setOrder] = React.useState({});
  const [products, setProducts] = React.useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      const url = `http://localhost:3001/checkout/${params.id}`;
      const data = await axiosGetAll(url, customer.token);
      const formatProducts = data.products.map((product) => (
        { name: product.name,
          quantity: product.SalesProduct.quantity,
          price: product.price }));
      setOrder(data);
      setProducts(formatProducts);
    };

    fetchOrder();
  }, [customer.token, params]);

  return (
    <>
      { Object.keys(order).length > 0 && console.log('order', order) }
      { products.length && console.log(products) }
      <header>
        <Navbar name={ customer.name } role={ customer.role } />
      </header>

      <main>
        <h1>Customer Order Details</h1>
        <h3>Detalhes do Pedido</h3>
        {
          Object.keys(order).length > 0 && (
            <span>
              <div data-testid={ dataTestIds[37] }>{`Pedido ${order.id}`}</div>
              <div data-testid={ dataTestIds[38] }>{`P. Vend: ${order.Seller.name}`}</div>
              <div data-testid={ dataTestIds[39] }>
                { moment(order.sale_date).format('DD/MM/YYYY') }
              </div>
              <div data-testid={ dataTestIds[40] }>{order.status}</div>
              <Button
                handleClick={ async () => {
                  try {
                    await axios({
                      method: 'put',
                      url: `http://localhost:3001/checkout/${params.id}`,
                      data: { status: 'Entregue' },
                      headers: { Authorization: customer.token },
                    });
                    setOrder({ ...order, status: 'Entregue' });
                  } catch (error) {
                    console.log(error);
                  }
                } }
                dataTestId={ dataTestIds[47] }
                submit={ false }
                disabled={ order.status !== 'Em Trânsito' }
              >
                Marcar como entregue
              </Button>
            </span>
          )
        }
        <OrderTable
          remove={ false }
          page="customerDetails"
          orders={ products }
        />
        <div data-testid={ dataTestIds[46] }>
          {`${order.total_price}`.split('.').join(',')}
        </div>
      </main>
    </>
  );
};

export default CustomerOrderDetails;
