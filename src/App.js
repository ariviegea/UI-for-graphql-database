import React from "react";
import { Block } from "jsxstyle";
import AdminPage from "./admin-page/AdminPage";

function App() {
  return (
    <div className="App">
      <Block backgroundColor="grey" color="white" textAlign="center">
        Web shop
      </Block>
      <AdminPage />
    </div>
  );
}

export default App;
