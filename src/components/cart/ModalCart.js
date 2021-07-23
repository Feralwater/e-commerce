import React from 'react';
import { connect } from 'react-redux';
import {
  Buttons,
  CartBottomWrapper,
  CheckButton,
  Content,
  ContentContainer,
  Modal,
  Title,
  Total,
  TotalTitle,
  ViewButton,
} from '../../styleComponents/ModalCartStyle';
import ProductInCart from '../products/ProductInCart';

class ModalCart extends React.PureComponent {
  enableScroll = () => {
    window.onscroll = () => {
    };
  };

  getContentContainer=(cartItems, currency) => (
    <ContentContainer onClick={(e) => e.stopPropagation()}>
      <Content>
        <Title>
          <span>My Bag</span>
          ,
          {' '}
          {cartItems.length}
          {' '}
          items
        </Title>
        <ProductInCart cartItems={cartItems} />
        {this.getCartBottomWrapper(currency, cartItems)}
      </Content>
    </ContentContainer>
  )

  getTotal=(currency, cartItems) => (
    <p>
      {currency.icon + cartItems.reduce((accum, item) => {
        const { amount } = item.prices.find((current) => current.currency === currency.currency);
        const { count } = item;
        return Number((accum + amount * count).toFixed(2));
      }, 0)}
    </p>
  )

  getCartBottomWrapper=(currency, cartItems) => (
    <CartBottomWrapper>
      <Total>
        <TotalTitle>Total</TotalTitle>
        {this.getTotal(currency, cartItems)}
      </Total>
      <Buttons>
        <ViewButton to="/cart">view bag</ViewButton>
        <CheckButton to="/checkout">check out</CheckButton>
      </Buttons>
    </CartBottomWrapper>
  )

  render() {
    const {
      cartItems,
      active,
      setModalActive,
      currency,
    } = this.props;

    return (
      <Modal
        active={active}
        onClick={() => {
          setModalActive(false);
          this.enableScroll();
        }}
      >
        {this.getContentContainer(cartItems, currency)}
      </Modal>
    );
  }
}

export default connect((state) => ({
  cartItems: state.cart.cartItems,
  currency: state.currency,
}),
null)(ModalCart);
