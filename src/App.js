import React from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = React.useState(0);
  const [total, setTotal] = React.useState(10);
  const [price, setPrice] = React.useState(0);

  const addTicket = () => {
    if (counter < total) {
      setCounter(counter + 1);
    } else {
      setCounter(counter);
    }
  }
  const removeTicket = () => {
    if (counter > 0) {
      setCounter(counter - 1);      
    }
  }

  const totalTicket = () => setTotal(total - counter);

  const pay = () => {
    setPrice(new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR', maximumFractionDigits: 0}).format(counter * 15));
  }

  return (
    <React.Fragment>
      <h2 className="title">Boletería</h2>
      <div className="container">
        <div className="container__counter">
          <h4>Boletos disponibles:</h4>
          <p>{total - counter}</p>
        </div>

        <div className="container__tickets">
          <h4>Comprar boletos:</h4>
          <div className="container__tickets-buy">
            <button onClick={addTicket}>+</button>
            <p>{counter}</p>
            <button onClick={removeTicket}>-</button>
          </div>
        </div>

        <div className="container__pay">
          <h4>Precio del boleto: 15 €</h4>
          <button onClick={pay}>Pagar</button>
        </div>
      </div>     
      <p className="totalPrice">Total a pagar: {price}</p>
    </React.Fragment>
  );
}

export default App;
