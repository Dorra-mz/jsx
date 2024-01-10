import React from "react";
import { Card } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import product from "./Product";

const App = () => {
  const firstName = "Dorra"; 

  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Image image={product.image} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      <p style={{ marginTop: "20px" }}>
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </p>
      {firstName && <Image image={product.image} />}
    </div>
  );
};

export default App;