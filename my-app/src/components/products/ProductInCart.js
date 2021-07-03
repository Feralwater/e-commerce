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
  Span,
  Ul
} from "../../styleComponents/ProductInCartStyle";
import {connect} from "react-redux";
import {addToCart, counterDecrement, counterIncrement} from "../../actions/cartActions";
import {AttributesContainer} from "../../styleComponents/ProductScreenStyles";
import {Features} from "../../styleComponents/CartStyle";

class ProductInCart extends Component {

  render() {
    const {cartItems} = this.props;
    return (

      <div>
        <Ul>
          {cartItems.map(item => (
            <Li inStock={item.inStock} key={Math.random() * 100000}>
              <ProductDescription>
                <ProductName>{item.name}</ProductName>
                <ProductName>description</ProductName>
                <ProductPrice>
                  {formatCurrency(item.prices, this.props.currency).icon + formatCurrency(item.prices, this.props.currency).price}
                </ProductPrice>

                <Features>
                  {item.attributes.map(attribute => attribute.type === 'swatch' ?
                    (
                      (<div key={Math.random() * 100000}>
                          <AttributesContainer>
                            {attribute.items.map(x =>
                              <Span
                                color={x.value}
                                key={Math.random() * 100000}
                                active={item.params[attribute.name]}
                              >
                              </Span>)
                            }
                          </AttributesContainer>
                        </div>
                      )
                    )
                    :
                    (
                      (<div key={Math.random() * 100000}>
                          <AttributesContainer>{attribute.items.map(x =>
                            <Span
                              key={Math.random() * 100000}
                              value={x.value}
                              active={item.params[attribute.name]}
                            >
                              {x.value}
                            </Span>)}
                          </AttributesContainer>
                        </div>
                      )
                    )
                  )
                  }
                </Features>

              </ProductDescription>

              <CounterImageContainer>

                <Counter inStock={item.inStock}>
                  <p onClick={() => this.props.counterIncrement(item)}>+</p>
                  <div>{item.count}</div>
                  <p onClick={() => this.props.counterDecrement(item)}>-</p>
                </Counter>

                <CartImage>
                  <Img src={item.gallery[0]} alt={item.name}/>
                </CartImage>

              </CounterImageContainer>
            </Li>
          ))}
        </Ul>
      </div>

    );
  }
}

export default connect((state) => ({
    cartItems: state.cart.cartItems,
    currency: state.currency.currency,
  }),
  {counterDecrement, addToCart, counterIncrement}
)(ProductInCart);
