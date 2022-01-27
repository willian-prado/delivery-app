import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dataTestIds from '../../dataTestIds';

const Navbar = ({ name, role, orders }) => (
  <nav>
    <Link data-testid={ dataTestIds[11] } to={ `/${role}/products` }>Produtos</Link>
    {
      orders && (
        <Link data-testid={ dataTestIds[12] } to={ `/${role}/orders` }>Meus pedidos</Link>
      )
    }

    <span data-testid={ dataTestIds[13] }>{name}</span>
    <Link data-testid={ dataTestIds[14] } to="/login">Sair</Link>
  </nav>
);

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  orders: PropTypes.bool.isRequired,
};

export default Navbar;
