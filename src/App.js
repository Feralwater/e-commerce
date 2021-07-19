import React from 'react';
import './fonts/fonts.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductScreen from './components/screens/ProductScreen';
import Cart from './components/cart/Cart';
import FilteredProductsScreen from './components/screens/filteredProductsScreen';

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={FilteredProductsScreen} />
        <Route path="/categories/:categoryName/:name" component={ProductScreen} />
        <Route path="/cart" component={Cart} />
        <Route path="/categories/:categoryName" component={FilteredProductsScreen} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
