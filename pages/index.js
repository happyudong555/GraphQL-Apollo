import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../apollo/initApollo';

const Query = gql`
  {
    products {
      id
      name
    }
  }
`
class App extends React.Component {
  render () {
    let products = this.props.data.products;
    let products_Array = Object.keys(products);
    return (
      <div>
        {
          products.name
        }
      </div>
    )
  }
}
export default withData(graphql(Query)(App));