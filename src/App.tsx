import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from 'routers';
import Navigator from './components/Navigator';

const App = () => {
  return (
    <BrowserRouter>
      <Navigator />
      <Routers />
    </BrowserRouter>
  );
};

export default App;
