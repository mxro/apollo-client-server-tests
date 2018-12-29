import React, { Component } from 'react';
import './App.css';

import { ApolloProvider } from "react-apollo";

import Books from '../Books/Books';

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "/graphql"
});



class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Books />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
