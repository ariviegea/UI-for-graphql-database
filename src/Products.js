import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

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

      return data.Products.map(({ name, product, price }) => (
        <div key={name}>
          <p>
            {name}: {product} {price}
          </p>
        </div>
      ));
    }}
  </Query>
);

export default Products;
