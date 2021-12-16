import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

import Formulario from './Validacion';


ReactDOM.render(
  <BrowserRouter>
      <Formulario></Formulario>
  </BrowserRouter>,
  document.getElementById('root')
);


