import React, {Component} from "react";
import './fonts/fonts.css'
import {Redirect, Route, Switch} from "react-router-dom";
import ProductScreen from "./components/screens/ProductScreen";
import HomeScreen from "./components/screens/HomeScreen";


class App extends Component {


  render() {


    return (
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route path="/products/:name" component={ProductScreen}/>
        {/*<Route path="/error" component={EmptyState}/>*/}
        <Redirect to='/'/>
      </Switch>
    );
  }
}

export default App;

