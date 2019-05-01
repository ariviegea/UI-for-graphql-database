import React from "react";
import { Block } from "jsxstyle";
import Products from "./Products";
import AdminPage from "./AdminPage";

function App() {
  return (
    <div className="App">
      <Block backgroundColor="grey" color="white" textAlign="center">
        Web shop
      </Block>
      <Products />
      <AdminPage />
    </div>
  );
}

export default App;
