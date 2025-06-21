import React, { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState('Loading...');

  useEffect(() => {
    fetch('/api/home').then(res => res.text()).then(setData);
  }, []);

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h2>Home Service</h2>
      <p>{data}</p>
    </div>
  );
}

export default Home;