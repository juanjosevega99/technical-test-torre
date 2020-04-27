import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import ContainerJob from '../components/ContainerJob';

import '../assets/styles/App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <ContainerJob />
  </div>
);

export default App;
