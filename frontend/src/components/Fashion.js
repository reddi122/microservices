import React, { useEffect, useState } from 'react';

function Fashion() {
  const [data, setData] = useState('Loading...');

  useEffect(() => {
    fetch('/api/fashion').then(res => res.text()).then(setData);
  }, []);

  return (
    <div style={{ border: '1px solid green', margin: '10px', padding: '10px' }}>
      <h2>Fashion Service</h2>
      <p>{data}</p>
    </div>
  );
}

export default Fashion;