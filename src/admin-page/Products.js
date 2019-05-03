import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Checkbox, CheckboxIcon } from "@atlaskit/checkbox";

const Products = () => (
  <Query
    query={gql`
      query products {
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
        <tr key={name}>
          <th name="id">
            <Checkbox />
          </th>
          <th name="Product">{name}</th>
          <th name="Price">{price}</th>
          <th name="Description">{description}</th>
        </tr>
      ));
    }}
  </Query>
);

export default Products;
