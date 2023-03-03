import {useState, useEffect} from 'react'
import '../Search/index.css'
import ConsumoApi from '../consumoApi/ConsumoApi';



function Cripto(){
    
    const [selectedMoeda, setSelectedMoeda] = useState('cripto');
  const [selectedMoeda2, setSelectedMoeda2] = useState('cripto');
  const [selected24h, setSelected24h] = useState('cripto');
  const [selectedMercado, setSelectedMercado] = useState('cripto');
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${selectedMoeda}`);
      const data = await response.json();
      setDados(data);
    };
    fetchData();
  }, [selectedMoeda]);

  const handleMoedaChange = (event) => {
    setSelectedMoeda(event.target.value);
  };

  const handleMoeda2Change = (event) => {
    setSelectedMoeda2(event.target.value);
  };

  const handle24hChange = (event) => {
    setSelected24h(event.target.value);
  };

  const handleMercadoChange = (event) => {
    setSelectedMercado(event.target.value);
  };
    return(
        <div className="container">
            <h1>Preços de todas as Criptpmoedas</h1>
        
      <header className="cabecalho">
        <select className="filtro" value={selectedMoeda} onChange={handleMoedaChange}>
          <option value="cripto">Todas as moedas</option>
          <option value="90">Bitcoin (BTC)</option>
          <option value="80">Ethereum (ETH)</option>
          <option value="825">Tether (USDT)</option>
          <option value="2710">Binance Coin (BNB)</option>
          <option value="2010">Cardano (ADA)</option>
        </select>

        <select className="filtro" value={selectedMoeda2} onChange={handleMoeda2Change}>
          <option value="cripto">Moedas</option>
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
          <option value="JPY">JPY</option>
          <option value="EUR">EUR</option>
        </select>

        <select className="filtro" value={selected24h} onChange={handle24hChange}>
          <option value="1">1h</option>
          <option value="24">24h</option>
          <option value="7d">7d</option>
        </select>

        <select className="filtro" value={selectedMercado} onChange={handleMercadoChange}>
          <option value="cripto">Limite de mercado</option>
          <option value="5">5M</option>
          <option value="10">10M</option>
          <option value="20">20M</option>
          <option value="50">50M</option>
        </select>
      </header>
        </div>
        
    )
}

export default Cripto