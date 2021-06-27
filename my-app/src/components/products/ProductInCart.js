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
  Span,
  Ul
} from "../../styleComponents/ProductInCartStyle";
import {connect} from "react-redux";
import {addToCart, counterDecrement, removeFromCart} from "../../actions/cartActions";
import {AttributesContainer} from "../../styleComponents/ProductScreenStyles";
import {Features} from "../../styleComponents/CartStyle";

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
                  {formatCurrency(item.prices, this.props.currency).icon+formatCurrency(item.prices, this.props.currency).price}
                </ProductPrice>

                <Features>
                  {item.attributes.map(x => x.type === 'swatch' ?
                    (
                      (<div key={Math.random() * 10_0000}>
                          <AttributesContainer>
                            {x.items.map(x =>
                              <Span color={x.value} key={Math.random() * 10_0000}></Span>)
                            }
                          </AttributesContainer>
                        </div>
                      )
                    )
                    :
                    (
                      (<div key={Math.random() * 10_0000}>
                          <AttributesContainer>{x.items.map(x => <Span
                            key={Math.random() * 10_0000}> {x.value}</Span>)}</AttributesContainer>
                        </div>
                      )
                    )
                  )
                  }
                </Features>

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
    currency: state.currency.currency,
  }),
  {removeFromCart, counterDecrement, addToCart}
)(ProductInCart);
