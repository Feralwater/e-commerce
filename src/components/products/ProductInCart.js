import React from 'react';
import { connect } from 'react-redux';
import formatCurrency from '../../utils/formatCurrency';
import {
  CartImage,
  Counter,
  CounterImageContainer,
  Img,
  Li,
  ProductDescription,
  ProductName,
  ProductPrice,
  Span,
  Ul,
} from '../../styleComponents/ProductInCartStyle';
import { addToCart, counterDecrement, counterIncrement } from '../../actions/cartActions';
import { AttributesContainer } from '../../styleComponents/ProductScreenStyles';
import { Features } from '../../styleComponents/CartStyle';

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

              <Features>
                {item.attributes.map((attribute) => (attribute.type === 'swatch'
                  ? (
                    (
                      <div key={Math.random() * 100_000}>
                        <AttributesContainer>
                          {attribute.items.map((x) => (
                            <Span
                              color={x.value}
                              key={Math.random() * 100_000}
                              active={item.params[attribute.name]}
                            />
                          ))}
                        </AttributesContainer>
                      </div>
                    )
                  )
                  : (
                    (
                      <div key={Math.random() * 100_000}>
                        <AttributesContainer>
                          {attribute.items.map((x) => (
                            <Span
                              key={Math.random() * 100_000}
                              value={x.value}
                              active={item.params[attribute.name]}
                            >
                              {x.value}
                            </Span>
                          ))}
                        </AttributesContainer>
                      </div>
                    )
                  )))}
              </Features>

            </ProductDescription>

            <CounterImageContainer>

              <Counter inStock={item.inStock}>
                <p onClick={() => counterIncrement(item)}>+</p>
                <div>{item.count}</div>
                <p onClick={() => counterDecrement(item)}>-</p>
              </Counter>

              <CartImage>
                <Img src={item.gallery[0]} alt={item.name} />
              </CartImage>

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
