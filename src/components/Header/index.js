import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import marco from '../../assets/marcoperfil.jpg';
import { Container } from './styles';

export default function Header() {

  const [toggle, setToggle] = useState(false);

  function handleToglle() {
    setToggle(!toggle);
  }

  return (
    <Container>
      <img src={marco} alt='Golin 2020' />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/estacionamiento">Estacionamiento</Link>
        <Link to="/funcionarios">Funcionarios</Link>
        <Link to="/funcionarios">Royalties</Link>
        <Link to="/funcionarios">Fonacide</Link>
      </nav>
    </Container>
  );
}
