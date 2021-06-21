import React, {Component} from 'react';
import formatCurrency from "../../utils/formatCurrency";
import {
  CartImage,
  Counter,
  CounterImageContainer,
  Img,
  Li,
  ProductDescription,
  ProductName,
  ProductPrice, RemoveButton,
  Ul
} from "../../styleComponents/ProductInCartStyle";
import {connect} from "react-redux";
import {removeFromCart} from "../../actions/cartActions";

class ProductInCart extends Component {

  counterIncrement = () => {
    // this.setState({
    //   modalActive: boolean,
    // })

  }
  counterDecrement = () => {
    // this.setState({
    //   modalActive: boolean,
    // })

  }

  render() {
    const {cartItems} = this.props;
    return (

      <div>
        <Ul>
          {cartItems.map(item => (
            <Li key={item.name}>
              <ProductDescription>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>
                  {formatCurrency(item.prices[0].amount)}
                </ProductPrice>
                <div>size</div>
              </ProductDescription>

              <CounterImageContainer>

                <Counter>
                  <p onClick={() => this.counterIncrement()}>+</p>
                  <div>{item.count}</div>
                  <p onClick={() => this.counterDecrement()}>-</p>
                </Counter>

                <CartImage>
                  <Img src={item.gallery[0]} alt={item.name}/>
                </CartImage>

              </CounterImageContainer>
              <RemoveButton onClick={() => this.props.removeFromCart(item)}>x</RemoveButton>
            </Li>
          ))}
        </Ul>
      </div>

    );
  }
}

export default connect((state) => ({
    cartItems: state.cart.cartItems,
  }),
  {removeFromCart}
)(ProductInCart);
