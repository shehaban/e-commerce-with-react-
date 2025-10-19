import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <ProductsList />
    </div>
  );
}

export default App;
