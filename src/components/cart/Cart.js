import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import { Container } from '../../styleComponents/HomeStyles';
import { CardContainer, CartTitle, Wrapper } from '../../styleComponents/CartStyle';
import { Ul } from '../../styleComponents/ProductInCartStyle';
import { addToCart, counterDecrement } from '../../actions/cartActions';
import Card from './Card';

class Cart extends React.PureComponent {
  render() {
    const { cartItems } = this.props;
    return (
      <>
        <Header />
        <Container>
          <Wrapper>
            <CartTitle>cart</CartTitle>
            <Ul>
              {cartItems.map((item) => (
                <CardContainer inStock={item.inStock} key={item.name}>
                  <Card item={item} />
                </CardContainer>
              ))}
            </Ul>
          </Wrapper>
        </Container>
      </>
    );
  }
}

export default connect((state) => ({
  cartItems: state.cart.cartItems,
  currency: state.currency.currency,
}),
{
  counterDecrement,
  addToCart,
})(Cart);
