import React from "react";
import { Block } from "jsxstyle";
import Products from "./Products";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Block fontSize={20}>Admin Page</Block>
        <Products />
      </>
    );
  }
}

export default AdminPage;
