import React from "react";
import Button from "@atlaskit/button";
import { Block } from "jsxstyle";
import Products from "./Products";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Block fontSize={30}>Admin Page</Block>
        <Block>
          Add New
          <Button appearance="primary">Product</Button>
          <Button appearance="primary">User</Button>
        </Block>
        <Products />
      </>
    );
  }
}

export default AdminPage;
