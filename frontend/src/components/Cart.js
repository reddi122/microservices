import React, { useEffect, useState } from 'react';

function Cart() {
  const [data, setData] = useState('Loading...');

  useEffect(() => {
    fetch('/api/cart').then(res => res.text()).then(setData);
  }, []);

  return (
    <div style={{ border: '1px solid blue', margin: '10px', padding: '10px' }}>
      <h2>Cart Service</h2>
      <p>{data}</p>
    </div>
  );
}

export default Cart;