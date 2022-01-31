import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import jwt from 'jsonwebtoken';
import { startCart, selectCart, selectTotalValue } from '../../../redux/cartSlice';
import Navbar from '../../../components/Navbar';
import { axiosGetAll } from '../../../helpers/axios';
import ProductCard from './ProductCard';
import dataTestIds from '../../../dataTestIds';

const CustomerProducts = () => {
  const [user] = React.useState(JSON.parse(localStorage.getItem('user')));
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalValue);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const data = await axiosGetAll('http://localhost:3001/products', user.token);
      setProducts(data);
      dispatch(startCart(data));
      // try {
      //   jwt.verify(user.token, 'secret_key');
      // } catch (err) {
      //   localStorage.removeItem('user');

      //   navigate('/login');
      // }
    };

    fetchProducts();
  }, [dispatch, user.token]);

  return (
    <>
      <header>
        <Navbar
          name={ user.name }
          role={ user.role }
          orders
        />
      </header>

      <main>
        <h1>Customer Products</h1>

        <button
          type="button"
          data-testid={ dataTestIds[79] }
          disabled={ totalPrice <= 0 }
          onClick={ () => navigate('/customer/checkout') }
        >
          <span data-testid={ dataTestIds[21] }>

            {`Ver carrinho: R$ ${String(totalPrice).split('.').join(',')}`}
          </span>
        </button>

        <ul>
          {
            cart.length > 0 && products && products.map((product) => {
              const { quantity } = cart.find(({ name }) => name === product.name);

              return (
                <ProductCard
                  key={ product.id }
                  product={ { ...product, quantity } }
                />
              );
            })
          }
        </ul>
      </main>
    </>
  );
};

export default CustomerProducts;
