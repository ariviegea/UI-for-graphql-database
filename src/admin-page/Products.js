import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Table, TCell } from "./../stylings/Table";

const Products = () => (
  <Query
    query={gql`
      {
        Products {
          _id
          name
          description
          price
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      console.log(data);

      return data.Products.map(({ name, price, description, _id }) => (
        <Table key={name}>
          <TCell name="id">{_id} </TCell>
          <TCell name="Product">{name}</TCell>
          <TCell name="Price">{price}</TCell>
          <TCell name="Description">{description}</TCell>
        </Table>
      ));
    }}
  </Query>
);

export default Products;
