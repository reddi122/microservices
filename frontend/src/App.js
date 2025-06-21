import React from 'react';
import Home from './components/Home';
import Cart from './components/Cart';
import Fashion from './components/Fashion';

function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Microservices Frontend Dashboard</h1>
      <Home />
      <Cart />
      <Fashion />
    </div>
  );
}

export default App;