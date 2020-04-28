import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../containers/Home';
import NotFound from '../containers/NotFund';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </BrowserRouter>
)

export default App