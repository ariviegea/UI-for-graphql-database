import React, { Component } from "react";
import gql from "graphql-tag";
import { withApollo } from "react-apollo";
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
    dialogOpen: false,
    name: "",
    price: "",
    description: ""
  };

  toggleDialog = () => {
    this.setState(({ dialogOpen }) => ({
      dialogOpen: !dialogOpen
    }));
  };

  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  onPriceChange = e => {
    this.setState({
      price: e.target.value
    });
  };
  onDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  clearForm = () => {
    this.setState({
      name: "",
      price: "",
      description: ""
    });
  };

  addProduct = async () => {
    const { name, price, description } = this.state;
    const { client } = this.props;
    await client.mutate({
      mutation: addProduct,
      variables: {
        name,
        price: parseFloat(price),
        description
      },
      refetchQueries: ["products"],
      awaitRefetchQueries: true
    });
    this.clearForm();
  };

  render() {
    const { dialogOpen, name, price, description } = this.state;
    return (
      <>
        <Button appearance="primary" onClick={this.addProduct}>
          Add Product
        </Button>
        <input value={name} onChange={this.onNameChange} />
        <input value={price} onChange={this.onPriceChange} />
        <input value={description} onChange={this.onDescriptionChange} />
      </>
    );
  }
}

export default withApollo(AddProducts);
