import React, {Component} from 'react';
import {
  Buttons,
  CartBottomWrapper,
  CheckButton,
  Content,
  ContentContainer,
  Modal,
  Title,
  Total,
  ViewButton
} from "../../styleComponents/ModalCartStyle";
import ProductInCart from "../products/ProductInCart";
import {connect} from "react-redux";
import {removeFromCart} from "../../actions/cartActions";


class ModalCart extends Component {

  render() {
    const {cartItems, active, setModalActive} = this.props;

    return (
      <Modal active={active} onClick={() => setModalActive(false)}>
        <ContentContainer onClick={(e) => e.stopPropagation()}>
          <Content>
            <Title><span>My Bag</span>, {cartItems.length} items</Title>
            <ProductInCart cartItems={cartItems}/>
            <CartBottomWrapper>
              <Total>
                <p>Total</p>
                <p>
                  {this.props.currency.icon + cartItems.reduce((accum, item) => {
                    const amount = item.prices.find(cur => cur.currency === this.props.currency.currency).amount
                    const count = item.count
                    return Number((accum + amount * count).toFixed(2))
                  }, 0)}
                </p>
              </Total>
              <Buttons>
                <ViewButton to='/cart'>view bag</ViewButton>
                <CheckButton to='/checkout'>check out</CheckButton>
              </Buttons>
            </CartBottomWrapper>
          </Content>
        </ContentContainer>
      </Modal>
    );
  }
}

export default connect((state) => ({
    cartItems: state.cart.cartItems,
    currency: state.currency,
  }),
  {removeFromCart}
)(ModalCart);
