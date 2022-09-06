import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from 'routers';
import GeneralWrapper from './theme/components/GeneralWrapper';
import Header from './components/Header';

const App = () => {
  return (
    <GeneralWrapper>
      <BrowserRouter>
        <Header />
        <Routers />
      </BrowserRouter>
    </GeneralWrapper>
  );
};

export default App;
