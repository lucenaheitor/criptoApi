import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../consumoApi/api.css'

function formatNumber(number) {
  return Number(number).toLocaleString('pt-BR', {
    maximumFractionDigits: 10
  });
}

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
      <div className='api-info'>
           <p>Criptomoeda:</p>
           <p>Preço$</p>
           <p>Limite de mercado:</p>
           <p>24H:</p>
      </div>
         

      <div className="api-container">
        {dataAPI.map((coin) => (
         <div key={coin.id}>
              <p>{coin.name}</p>
              <p style={{ textAlign: 'center' }}>{formatNumber(coin.price)}</p>
              <p style={{ textAlign: 'right' }}>{formatNumber(coin.marketCap)}</p>
              <p style={{ textAlign: 'right' }}>{coin.change}%</p>
       </div>
        ))}
      </div>
    </div>
  );
};

export default ConsumoApi;