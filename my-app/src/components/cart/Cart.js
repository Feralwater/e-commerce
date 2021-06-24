import React, {Component} from 'react';
import Header from "../header/Header";
import {addToCart, counterDecrement, removeFromCart} from "../../actions/cartActions";
import {connect} from "react-redux";
import {Container} from "../../styleComponents/HomeStyles";
import ProductInCart from "../products/ProductInCart";
import {CartTitle, Wrapper} from "../../styleComponents/CartStyle";

class Cart extends Component {

  render() {
    const {cartItems} = this.props;
    return (
      <div>
        {cartItems === 0 ?
          <div>Cart is empty</div>
          :
          (<div>
            <Header/>
            <Container>
              <Wrapper>
                <CartTitle>cart</CartTitle>
                <ProductInCart/>
              </Wrapper>
            </Container>
          </div>)
        }

      </div>)
  }
}

export default connect((state) => ({
    cartItems: state.cart.cartItems,
  }),
  {removeFromCart, counterDecrement, addToCart}
)(Cart);

