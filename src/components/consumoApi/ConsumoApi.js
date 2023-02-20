import React, { useState, useEffect } from 'react';

function ConsumoApi(){
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
    
  
    return (
      <div>
        <body>
      <h1> sei la </h1>
        </body>
      </div>
    );
  };



export default ConsumoApi