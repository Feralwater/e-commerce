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
  ProductPrice,
  RemoveButton,
  Ul
} from "../../styleComponents/ProductInCartStyle";
import {connect} from "react-redux";
import {addToCart, counterDecrement, removeFromCart} from "../../actions/cartActions";

class ProductInCart extends Component {

  render() {
    const {cartItems} = this.props;
    return (

      <div>
        <Ul>
          {cartItems.map(item => (
            <Li inStock={item.inStock} key={item.name}>
              <ProductDescription>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>
                  {formatCurrency(item.prices[0].amount)}
                </ProductPrice>
                <div>size</div>
              </ProductDescription>

              <CounterImageContainer>

                <Counter inStock={item.inStock}>
                  <p onClick={() => this.props.addToCart(item)}>+</p>
                  <div>{item.count}</div>
                  <p onClick={() => this.props.counterDecrement(item)}>-</p>
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
  {removeFromCart, counterDecrement, addToCart}
)(ProductInCart);
