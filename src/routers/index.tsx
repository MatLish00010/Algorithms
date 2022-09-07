import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import BinarySearch from 'pages/BinarySearch';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/binarySearch" element={<BinarySearch />} />
      <Route path="*" element={'ERROR'} />
    </Routes>
  );
};

export default Routers;
