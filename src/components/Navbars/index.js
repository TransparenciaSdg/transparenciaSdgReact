import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { FaDollarSign } from 'react-icons/fa';
import { List } from './styles';

export default function Navbars() {

  return (
    <List>
      <li>
        <h1>
           Rubros
        </h1>
      </li>
      <li>
        <NavLink to="/js">Estacionamiento</NavLink>
      </li>
      <li>
        <NavLink to="/">Estacionamiento</NavLink>
      </li>
      <li>
        <NavLink to="/">Estacionamiento</NavLink>
      </li>
      <li>
        <NavLink to="/">Estacionamiento</NavLink>
      </li>
    </List>
  );
}
