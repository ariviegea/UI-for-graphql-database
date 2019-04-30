import React from "react";
import { Block } from "jsxstyle";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <Block backgroundColor="grey" color="white" textAlign="center">
        Web shop
      </Block>
      <Products />
    </div>
  );
}

export default App;
