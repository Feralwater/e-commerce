import React, {Component} from 'react';
import {Content, ContentContainer, Modal} from "../../styleComponents/ModalCartStyle";
import Cart from "./Cart";


class ModalCart extends Component {

  render() {
    return (
      <Modal active={this.props.active} onClick={() => this.props.setModalActive(false)}>
        <ContentContainer onClick={(e) => e.stopPropagation()}>
          <Content>
            <Cart cartItems={this.props.cartItems}
                  removeFromCart={this.props.removeFromCart}
            />
          </Content>
        </ContentContainer>
      </Modal>
    );
  }
}

export default ModalCart;
