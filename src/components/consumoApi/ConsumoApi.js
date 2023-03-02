import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../consumoApi/api.css'

function ConsumoApi() {
  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    let cancel;
    axios.get('https://api.coinranking.com/v2/coins', {
      cancelToken: new axios.CancelToken((c) => cancel = c)
    })
    .then(res => {
      setDataAPI(res.data?.data?.coins || []);
    })
    .catch(err => {
      if (axios.isCancel(err)) return;
      console.error(err);
      setDataAPI([]);
    });

    return () => cancel();
  }, []);

  return (
    <div>
      <h1> Moedas</h1>
      <div className="api-container">
        {dataAPI.map((coin) => (
          <p key={coin.id}>{coin.name} ({coin.symbol}): {coin.marketCap}</p>
        ))}
      </div>
    </div>
  );
};

export default ConsumoApi;