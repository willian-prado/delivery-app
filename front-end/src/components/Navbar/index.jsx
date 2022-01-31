import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import dataTestIds from '../../dataTestIds';

const Navbar = ({ name, role, orders }) => {
  const navigate = useNavigate();

  return (
    <nav>
      <Link data-testid={ dataTestIds[11] } to={ `/${role}/products` }>Produtos</Link>
      {
        orders && (
          <Link
            data-testid={ dataTestIds[12] }
            to={ `/${role}/orders` }
          >
            Meus pedidos
          </Link>
        )
      }

      <span data-testid={ dataTestIds[13] }>{name}</span>
      <button
        type="button"
        data-testid={ dataTestIds[14] }
        onClick={ () => {
          localStorage.removeItem('user');

          navigate('/login');
        } }
      >
        Sair
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  orders: PropTypes.bool.isRequired,
};

export default Navbar;
