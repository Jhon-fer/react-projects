import React from "react";
import { CardComponent } from "./components/component1";
import "./App.css";

function App() {

  return (
    <section>
      <CardComponent 
        img="https://applekid.pk/wp-content/uploads/2020/04/iPhoneX-silver-1.jpg"
        brand="iPhone X"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam eius alias, et adipisci harum facere incidunt temporibus quo ea modi pariatur quas sapiente repudiandae quasi veniam blanditiis perferendis officia."
        units="10"
        price="1200 €"
      />
    </section>
  );
}

export default App;
