import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Table, TCell } from "./Table";

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
          <TCell>{_id} </TCell>
          <TCell>{name}</TCell>
          <TCell name="price">{price}</TCell>
          <TCell name="description">{description}</TCell>
        </Table>
      ));
    }}
  </Query>
);

export default Products;
