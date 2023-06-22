import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomePage from './components/Homepage';
import ProductDetailPage from './components/ProductDetailPage';

function App() {
  return (
   
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route exact path="/products/:id" element={<ProductDetailPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
