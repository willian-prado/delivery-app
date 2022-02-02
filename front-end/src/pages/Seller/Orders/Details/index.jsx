import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import moment from 'moment';
import Navbar from '../../../../components/Navbar';
import { axiosGetAll } from '../../../../helpers/axios';
import OrderTable from '../../../../components/OrderTable';
import dataTestIds from '../../../../dataTestIds';
import Button from '../../../../components/Button';

const SellerOrderDetails = () => {
  const [seller] = React.useState(JSON.parse(localStorage.getItem('user')));
  const [order, setOrder] = React.useState({});
  const [products, setProducts] = React.useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      const url = `http://localhost:3001/checkout/${params.id}`;
      const data = await axiosGetAll(url, seller.token);
      const formatProducts = data.products.map((product) => (
        { name: product.name,
          quantity: product.SalesProduct.quantity,
          price: product.price }));
      setOrder(data);
      setProducts(formatProducts);
    };

    fetchOrder();
  }, [seller.token, params]);

  return (
    <>
      { Object.keys(order).length > 0 && console.log('order', order) }
      { products.length && console.log(products) }
      <header>
        <Navbar name={ seller.name } role={ seller.role } />
      </header>

      <main>
        <h1>Seller Order Details</h1>
        <h3>Detalhes do Pedido</h3>
        {
          Object.keys(order).length > 0 && (
            <span>
              <div data-testid={ dataTestIds[54] }>{`Pedido ${order.id}`}</div>
              <div data-testid={ dataTestIds[56] }>
                { moment(order.sale_date).format('DD/MM/YYYY') }
              </div>
              <div data-testid={ dataTestIds[55] }>{order.status}</div>
              <Button
                handleClick={ () => {

                } }
                dataTestId={ dataTestIds[57] }
                disabled={ false }
              >
                Preparar Pedido
              </Button>
              <Button
                handleClick={ () => {
                // axios
                } }
                dataTestId={ dataTestIds[58] }
                submit={ false }
                disabled
              >
                Saiu para entrega
              </Button>
            </span>
          )
        }
        <OrderTable
          remove={ false }
          page="sellerDetails"
          orders={ products }
        />
        <div data-testid={ dataTestIds[64] }>
          {`${order.total_price}`.split('.').join(',')}
        </div>
      </main>
    </>
  );
};

export default SellerOrderDetails;
