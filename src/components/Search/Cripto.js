import {useState} from 'react'
import '../Search/index.css'



function Cripto(){
    
    const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }
    return(
        <div className="container">
            <h1>Preços de todas as Criptpmoedas</h1>
            <header className="cabecalho">
              <select className="filtro">
                  <option value="cripto">Todas as moedas</option>
                  <option value="bitcoin">BTC</option>
                  <option value="ethereum">ETH</option>
                  <option value="tetherUS">USDT</option>
                  <option value="bnb">BNB</option>
                  <option value="cardano">ADA</option>
              </select>  
              <select className="filtro">
                  <option value="cripto">Todas as moedas</option>
                  <option value="bitcoin">BTC</option>
                  <option value="ethereum">ETH</option>
                  <option value="tetherUS">USDT</option>
                  <option value="bnb">BNB</option>
                  <option value="cardano">ADA</option>
              </select>  
              <select className="filtro">
                  <option value="cripto">Moedas</option>
                  <option value="dolar">USD</option>
                  <option value="real">BRL</option>
                  <option value="iene">JPY</option>
                  <option value="euro">EUR</option>
              </select>  
              <select className="filtro">
                  <option value="cripto">24h</option>
              </select>  
              <select className="filtro">
                  <option value="cripto">Limite de mercado</option>
              </select>
            </header>
        </div>
    )
}

export default Cripto