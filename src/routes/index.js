import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Estacionamiento from '../pages/Estacionamiento';
import Funcionarios from '../pages/Funcionarios';

export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Home} /> 
      <Route path="/estacionamiento" component={Estacionamiento} /> 
      <Route path="/funcionarios" component={Funcionarios} /> 
      <Route path="/" component={() => <h1>404</h1>}/>
    </Switch>
  )
}