import React, {Component} from 'react';
import {
  Buttons,
  CartBottomWrapper,
  CheckButton,
  Content,
  ContentContainer,
  Modal, Title,
  Total,
  ViewButton
} from "../../styleComponents/ModalCartStyle";
import formatCurrency from "../../utils/formatCurrency";
import ProductInCart from "../products/ProductInCart";


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
                  {formatCurrency(cartItems.reduce((x, y) => x + (y.prices[0].amount * y.count), 0))}
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

export default ModalCart;
