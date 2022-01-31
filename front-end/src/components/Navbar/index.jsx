import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import dataTestIds from '../../dataTestIds';

const Navbar = ({ name, role }) => {
  const navigate = useNavigate();

  return (
    <nav>
      {
        role === 'customer' && (
          <Link
            data-testid={ dataTestIds[11] }
            to={ `/${role}/products` }
          >
            Produtos
          </Link>)
      }
      <Link
        data-testid={ dataTestIds[12] }
        to={ `/${role}/orders` }
      >
        {role === 'customer' ? <p>Meus Pedidos</p> : <p>Pedidos</p>}
      </Link>

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
};

export default Navbar;
