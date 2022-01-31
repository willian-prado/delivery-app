import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../../components/Navbar';
import Input from '../../../components/Input';
import OrderTable from '../../../components/OrderTable';
import dataTestIds from '../../../dataTestIds';
import { selectCart, selectTotalValue } from '../../../redux/cartSlice';
import Button from '../../../components/Button';

const CustomerCheckout = () => {
  const [customer] = React.useState(JSON.parse(localStorage.getItem('user')));
  const [seller] = React.useState('Fulana Pereira');
  const cart = useSelector(selectCart);
  const totalValue = useSelector(selectTotalValue);

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

        <form>
          <select data-testid={ dataTestIds[29] }>
            <option value={ seller }>{seller}</option>
          </select>

          <Input dataTestId={ dataTestIds[30] } />

          <Input type="number" dataTestId={ dataTestIds[31] } />

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
