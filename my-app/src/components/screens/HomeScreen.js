import React, {Component} from "react";
import {Container, Main} from '../../styleComponents/HomeStyles'
import '../../fonts/fonts.css'
import Products from "../products/Products";
import Header from "../header/Header";


class HomeScreen extends Component {

  // filterProducts = (event) => {
  //   if (event.target.value === "") {
  //     this.setState({size: event.target.value, products: data.products})
  //   } else {
  //     this.setState({
  //       size: event.target.value,
  //       products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
  //     })
  //   }
  //
  // }


  render() {
    return (
      <Container>
        <Header/>
        <Main>
          {/*<Filter count={this.state.products.length}*/}
          {/*        size={this.props.size}*/}
          {/*        sort={this.props.sort}*/}
          {/*        filterProducts={this.filterProducts}*/}
          {/*        sortProducts={this.sortProducts}*/}
          {/*/>*/}
          <Products/>
        </Main>
      </Container>
    );
  }
}

export default HomeScreen;

