import React, {Component} from "react";
import './fonts/fonts.css'
import {Redirect, Route, Switch} from "react-router-dom";
import ProductScreen from "./components/screens/ProductScreen";
import HomeScreen from "./components/screens/HomeScreen";
import Cart from "./components/cart/Cart";
import FilteredProductsScreen from "./components/screens/filteredProductsScreen";


class App extends Component {


  render() {

    return (
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route path="/categories/:categoryName/:name" component={ProductScreen}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/categories/:categoryName" component={FilteredProductsScreen}/>
        <Redirect to='/'/>
      </Switch>
    );
  }
}

export default App;

