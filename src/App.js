import React from "react";
import "./App.css";

function App() {
  const [coin, setCoin] = React.useState(0);
  const [convert, setConvert] = React.useState(0);

  const onChange = (event) => {
    setCoin(event.target.value);
  }
  
  const select = document.getElementById('select');
  
  const convertCoin = () => {
    if (select.value === 'USD a COP') {
      setConvert(() => {
        let money = coin * 4313;
        let showMoney = new Intl.NumberFormat('es-CO' ,{ style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(money);
        return `${showMoney} COP`;
      });
    } else if (select.value === 'USD a EUR') {
      setConvert(() => {
        let money = coin * 0.98;
        let showMoney = new Intl.NumberFormat('de-DE' ,{ style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(money);
        return `${showMoney}`;
      });
    } else if (select.value === 'COP a USD') {
      setConvert(() => {
        let money = coin * (1/4313);
        let showMoney = new Intl.NumberFormat('en-US' ,{ style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(money);
        return `${showMoney} USD`;
      });
    } else if (select.value === 'EUR a COP') {
      setConvert(() => {
        let money = coin * (1*4225);
        let showMoney = new Intl.NumberFormat('es-CO' ,{ style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(money);
        return `${showMoney} COP`;
      });
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <h2>Convertidor de Divisas</h2>
        <select id="select">
          <option>Selecciona una opción</option>
          <option>USD a COP</option>
          <option>COP a USD</option>
          <option>USD a EUR</option>
          <option>EUR a COP</option>
        </select>
        <input type="number" id="input" onChange={onChange}></input>
        <button className="button" onClick={convertCoin}>Convertir</button>
        <p>{convert}</p>
      </div>     
    </React.Fragment>
  );
}

export default App;
