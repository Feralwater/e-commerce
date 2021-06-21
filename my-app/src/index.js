import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import GlobalStyles from "./styleComponents/GlobalStyles";
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
      <GlobalStyles/>

    <App />
        </BrowserRouter>

      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


