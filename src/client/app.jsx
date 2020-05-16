import React, { useState, useEffect } from 'react';
import data from './data';
import Card from './components/cards';
import './style.scss';

const App = () => {
  const [appData, setData] = useState([]);
  useEffect(() => {
    setData(data.data);
  });
  return (
    <div className="container">
      {appData.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default App;
