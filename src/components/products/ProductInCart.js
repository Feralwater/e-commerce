import React from 'react';
import { connect } from 'react-redux';
import formatCurrency from '../../utils/formatCurrency';
import {
  CartImage, CartImageWrapper,
  Counter,
  CounterImageContainer,
  Img,
  Li,
  ProductDescription,
  ProductName,
  ProductPrice,
  Ul,
} from '../../styleComponents/ProductInCartStyle';
import { addToCart, counterDecrement, counterIncrement } from '../../actions/cartActions';
import ChooseFeaturesInCartDisplay from './ChooseFeauturesInCartDisplay';

class ProductInCart extends React.PureComponent {
  render() {
    const {
      cartItems,
      currency,
      counterIncrement,
      counterDecrement,
    } = this.props;
    return (
      <Ul>
        {cartItems.map((item) => (
          <Li inStock={item.inStock} key={Math.random() * 100_000}>
            <ProductDescription>
              <ProductName>{item.name}</ProductName>
              <ProductName>{item.category}</ProductName>
              <ProductPrice>
                {formatCurrency(item.prices, currency).icon + formatCurrency(item.prices, currency).price}
              </ProductPrice>
              <ChooseFeaturesInCartDisplay item={item} />

            </ProductDescription>

            <CounterImageContainer>

              <Counter inStock={item.inStock}>
                <p onClick={() => counterIncrement(item)}>+</p>
                <div>{item.count}</div>
                <p onClick={() => counterDecrement(item)}>-</p>
              </Counter>
              <CartImageWrapper>
                <CartImage>
                  <Img src={item.gallery[0]} alt={item.name} />
                </CartImage>
              </CartImageWrapper>
            </CounterImageContainer>
          </Li>
        ))}
      </Ul>
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
  counterIncrement,
})(ProductInCart);
