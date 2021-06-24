import React, {Component} from 'react';
import Header from "../header/Header";
import {addToCart, counterDecrement, removeFromCart} from "../../actions/cartActions";
import {connect} from "react-redux";
import {Container} from "../../styleComponents/HomeStyles";
import {
  CardContainer,
  CartImg,
  CartTitle,
  CounterContainer,
  Features,
  ItemDescription,
  ItemName,
  ItemPrice,
  RightElementsContainer,
  Wrapper
} from "../../styleComponents/CartStyle";
import {Img, ProductDescription, RemoveButton, Ul} from "../../styleComponents/ProductInCartStyle";
import formatCurrency from "../../utils/formatCurrency";
import {Attributes, AttributesContainer, Span} from "../../styleComponents/ProductScreenStyles";

class Cart extends Component {

  render() {
    const {cartItems} = this.props;
    return (
      <div>
        {cartItems === 0 ?
          <div>Cart is empty</div>
          :
          (<div>
            <Header/>
            <Container>
              <Wrapper>
                <CartTitle>cart</CartTitle>

                <Ul>
                  {cartItems.map(item => (
                    <CardContainer inStock={item.inStock} key={item.name}>
                      <ProductDescription>
                        <ItemName>{item.name}</ItemName>
                        <ItemDescription>description???</ItemDescription>
                        <ItemPrice>
                          {formatCurrency(item.prices, this.props.currency)}
                        </ItemPrice>

                        <Features>
                          {item.attributes.map(x => x.type === 'swatch' ?
                            (
                              (<div key={Math.random() * 10_0000}>
                                  <Attributes>{x.name}:</Attributes>
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
                                  <Attributes>{x.name}:</Attributes>
                                  <AttributesContainer>{x.items.map(x => <Span
                                    key={Math.random() * 10_0000}> {x.value}</Span>)}</AttributesContainer>
                                </div>
                              )
                            )
                          )
                          }
                        </Features>


                      </ProductDescription>

                      <RightElementsContainer>

                        <CounterContainer inStock={item.inStock}>
                          <p onClick={() => this.props.addToCart(item)}>+</p>
                          <div>{item.count}</div>
                          <p onClick={() => this.props.counterDecrement(item)}>-</p>
                        </CounterContainer>

                        <CartImg>
                          <Img src={item.gallery[0]} alt={item.name}/>
                        </CartImg>

                      </RightElementsContainer>
                      <RemoveButton onClick={() => this.props.removeFromCart(item)}>x</RemoveButton>
                    </CardContainer>
                  ))}
                </Ul>


              </Wrapper>
            </Container>
          </div>)
        }

      </div>)
  }
}

export default connect((state) => ({
    cartItems: state.cart.cartItems,
    currency: state.currency.currency,
  }),
  {removeFromCart, counterDecrement, addToCart}
)(Cart);

