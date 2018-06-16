import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../apollo/initApollo';
const Query = gql 
`{
    products {
      id
      name
    }
}`
class App extends React.Component {
  productsRender() {
    let data = this.props.data;
    console.log(data)
    if (data.loading) {
      return (
        <div>loading products ...</div>
      )
    }else if(data.error){
      return(
        <div>Error</div>
      )
    }
    else {
      return data.products.map(product => {
        return (
          <h1>{product.name}</h1>
        )
      })
    }
  }
  render () {
    return (
      <div>
        {this.productsRender()}
      </div>
    )
  }
}
const graphql_filter = graphql(Query)(App);
export default withData(graphql_filter);
