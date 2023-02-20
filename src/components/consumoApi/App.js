import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
   const response =  axios.get('https://api.coinranking1ac7c9e5d8a92c64d5658f1f0d165cc5b3c140557a40dd0e.com/data')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
        <body>
          {data.map(item => (
        <p key={item.id}>{item.text}</p>
      ))}  
        </body>
    </div>
  );
};

export default App;