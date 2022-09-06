import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>First</h1>} />
      <Route path="/second" element={<h1>Second</h1>} />
    </Routes>
  );
};

export default Routers;
