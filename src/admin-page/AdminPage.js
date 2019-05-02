import React from "react";
import Button from "@atlaskit/button";
import { Block } from "jsxstyle";
import Products from "./Products";
import AddProducts from "./AddProducts";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Block fontSize={30}>Admin Page</Block>
        <Block>
          <AddProducts />
        </Block>
        <Block marginTop="10px">
          <Products />
        </Block>
      </>
    );
  }
}

export default AdminPage;
