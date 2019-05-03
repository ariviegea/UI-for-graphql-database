import React from "react";
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
        <Block marginTop="10px" margin-left="30px">
          <thead>
            <th />
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </thead>
          <tbody>
            <Products />
          </tbody>
        </Block>
      </>
    );
  }
}

export default AdminPage;
