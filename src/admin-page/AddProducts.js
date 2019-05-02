import React, { Component } from "react";
import gql from "graphql-tag";
import Button from "@atlaskit/button";
import ModalDialog from "@atlaskit/modal-dialog";

const addProduct = gql`
  mutation AddProduct($name: String!, $price: Float!, $description: String!) {
    AddProduct(name: $name, price: $price, description: $description) {
      name
      price
      description
    }
  }
`;

class AddProducts extends Component {
  state = {
    dialogOpen: false
  };

  toggleDialog = () => {
    this.setState(({ dialogOpen }) => ({
      dialogOpen: !dialogOpen
    }));
  };

  addProduct = (name, price, description) => {
    const { client } = this.props;
    return new Promise(async (resolve, reject) => {
      try {
        await client.mutate({
          mutation: addProduct,
          variables: {
            name,
            price,
            description
          },
          refetchQueries: ["Product"],
          awaitRefetchQueries: true
        });
      } catch (e) {
        reject(e);
      }
    });
  };

  render() {
    const { dialogOpen } = this.state;
    return (
      <>
        <Button appearance="primary" onClick={this.toggleDialog}>
          Add Product
        </Button>
        <ModalDialog
          onSubmit={this.addProduct}
          open={dialogOpen}
          close={this.toggleDialog}
          dialogTitle="Add new product"
          buttonText="Add"
        >
          ADD INPUT FI
        </ModalDialog>
      </>
    );
  }
}

export default AddProducts;
