import React from "react";
import "./CardComponent.css"

const CardComponent = props => {
  const [state, setState] = React.useState('');
  const [amount, setAmount] = React.useState(1);
  const [price, setPrice] = React.useState();

  // change quantity and value of product
  const unitsAvailable = 10;
  const saleprice = 1200;

  const addAmount = () => {
    if (amount < unitsAvailable) {
      setAmount(amount + 1);
    }
  }
  const removeAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    } else {
      setAmount(amount);
    }
  }
  
  const onBuy = () => {
    setPrice(
      `Valor de la compra: ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0}).format(amount * saleprice)}`
    );
  }

  const onSave = () => setState('¡Gracias por su compra!');

  return (
    <main className="main">
      <img src={props.img} className="img"></img>
      <div className="main-container">
        <div className="container">
          <p className="title"><strong>Marca:</strong> {props.brand}</p>
          <p className="description"><strong>Descripción:</strong> {props.description}</p>
          <p className="units"><strong>Und. disponibles:</strong> {props.units}</p>
          <p className="price"><strong>Precio:</strong> {props.price}</p>
        </div>
        <div className="container-buttonQuantity">
          <p className="quantity"><strong>Cantidad:</strong> {amount}</p>
          <button onClick={addAmount} className="button-quantity">+</button>
          <button onClick={removeAmount}className="button-quantity">-</button>
        </div>
          <button onClick={onBuy}className="button">Comprar</button>
          <button onClick={onSave}className="button">Pagar</button>
      </div>
      <div className="msg">
          <p className="price-total">{price}</p>
          <p className="msg-buy">{state}</p>
      </div>
    </main>
  );
}

export { CardComponent };