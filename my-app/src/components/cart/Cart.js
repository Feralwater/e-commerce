import React, {Component} from 'react';
import Header from "../header/Header";
import {Container} from "../../styleComponents/HomeStyles";
import {CardContainer, CartTitle, Wrapper} from "../../styleComponents/CartStyle";
import {Ul} from "../../styleComponents/ProductInCartStyle";
import {connect} from "react-redux";
import {addToCart, counterDecrement} from "../../actions/cartActions";
import Card from "./Card";

class Cart extends Component {


  render() {
    const {cartItems} = this.props;
    return (
      <div>
        <Header/>
        <Container>
          <Wrapper>
            <CartTitle>cart</CartTitle>
            <Ul>
              {cartItems.map(item => (
                <CardContainer inStock={item.inStock} key={item.name}>
                  <Card item={item}/>
                </CardContainer>
              ))}
            </Ul>
          </Wrapper>
        </Container>
      </div>)
  }
}

export default connect((state) => ({
    cartItems: state.cart.cartItems,
    currency: state.currency.currency,
  }),
  {counterDecrement, addToCart}
)(Cart);

