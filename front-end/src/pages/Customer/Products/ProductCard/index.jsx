import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  updateProduct, addProduct, decreaseProductQuantity,
} from '../../../../redux/cartSlice';
import dataTestIds from '../../../../dataTestIds';

const ProductCard = ({ product }) => {
  const { id, quantity, price, url_image: urlImage, name } = product;
  const dispatch = useDispatch();

  return (
    <li key={ id }>
      <div data-testid={ `${dataTestIds[16]}${id}` }>
        {price.split('.').join(',')}
      </div>
      <img data-testid={ `${dataTestIds[17]}${id}` } src={ urlImage } alt={ name } />
      <h3 data-testid={ `${dataTestIds[15]}${id}` }>{name}</h3>

      <button
        data-testid={ `${dataTestIds[19]}${id}` }
        type="button"
        onClick={ () => dispatch(decreaseProductQuantity({ name })) }
        disabled={ quantity < 1 }
      >
        -
      </button>
      <input
        data-testid={ `${dataTestIds[20]}${id}` }
        value={ quantity }
        onChange={ (event) => {
          dispatch(updateProduct({ name, quantity: event.target.value }));
        } }
      />
      <button
        data-testid={ `${dataTestIds[18]}${id}` }
        type="button"
        onClick={ () => dispatch(addProduct({ name })) }
      >
        +
      </button>
    </li>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    price: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
