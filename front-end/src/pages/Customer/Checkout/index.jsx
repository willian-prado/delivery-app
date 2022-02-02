import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Input from '../../../components/Input';
import OrderTable from '../../../components/OrderTable';
import dataTestIds from '../../../dataTestIds';
import { selectCart, selectTotalValue } from '../../../redux/cartSlice';
import Button from '../../../components/Button';

const CustomerCheckout = () => {
  const [customer] = React.useState(JSON.parse(localStorage.getItem('user')));
  const [seller] = React.useState('Fulana Pereira');
  const [address, setAddress] = React.useState('');
  const [number, setNumber] = React.useState('');
  const cart = useSelector(selectCart);
  const totalValue = useSelector(selectTotalValue);
  const navigate = useNavigate();

  return (
    <>
      <header>
        <Navbar name={ customer.name } role={ customer.role } />
      </header>

      <main>
        <h1>Customer Checkout</h1>

        <OrderTable
          remove
          page="customerCheckout"
          orders={
            cart.filter((product) => product.quantity > 0)
          }
        />

        <div data-testid={ dataTestIds[28] }>
          {String(totalValue.toFixed(2)).split('.').join(',')}
        </div>

        <form
          onSubmit={ async (event) => {
            event.preventDefault();

            try {
              const sale = {
                userId: customer.id,
                sellerId: 2,
                total_price: totalValue.toFixed(2),
                delivery_address: address,
                delivery_number: number,
                status: 'Pendente',
              };

              const saleProduct = cart.filter((product) => product.quantity > 0)
                .map(({ id, quantity }) => ({ product_id: id, quantity }));

              const { data } = await axios({
                method: 'post',
                url: 'http://localhost:3001/checkout',
                data: { sale, saleProduct },
                headers: { Authorization: customer.token },
              });

              navigate(`/customer/orders/${data.id}`);
            } catch (error) {
              console.log(error);
            }
          } }
        >
          <select data-testid={ dataTestIds[29] }>
            <option value={ seller }>{seller}</option>
          </select>

          <Input
            value={ address }
            handleChange={ (event) => setAddress(event.target.value) }
            dataTestId={ dataTestIds[30] }
          />

          <Input
            value={ number }
            handleChange={ (event) => setNumber(event.target.value) }
            type="number"
            dataTestId={ dataTestIds[31] }
          />

          <Button
            submit
            dataTestId={ dataTestIds[32] }
          >
            Finalizar pedido
          </Button>
        </form>
      </main>
    </>
  );
};
export default CustomerCheckout;
