import React, {Component} from 'react';
import Header from "../header/Header";
import {Container} from "../../styleComponents/HomeStyles";
import {
  CardContainer,
  Carousel,
  CartImg,
  CartTitle,
  CounterContainer,
  Features,
  ItemDescription,
  ItemName,
  ItemPrice,
  NextArrow,
  PrevArrow,
  RightElementsContainer,
  Slider,
  Wrapper
} from "../../styleComponents/CartStyle";
import {ProductDescription, RemoveButton, Ul} from "../../styleComponents/ProductInCartStyle";
import formatCurrency from "../../utils/formatCurrency";
import {Attributes, AttributesContainer, Span} from "../../styleComponents/ProductScreenStyles";
import {connect} from "react-redux";
import {addToCart, counterDecrement, removeFromCart} from "../../actions/cartActions";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
    }
  }

  nextSlide = (length, current) => {
    this.setState({
      current: current === length - 1 ? 0 : current + 1
    })
  }

  prevSlide = (length, current) => {
    this.setState({
      current: current === 0 ? length - 1 : current - 1,
    })
  }


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

                        {!Array.isArray(item.gallery) || item.gallery.length <= 0 ?

                          <img src="https://acoustic-atm.ru/userfiles/default_images/default.jpg" alt=""/>
                          :
                          <CartImg>
                            {/*<Img src={item.gallery[0]} alt={item.name}/>*/}

                            <PrevArrow
                              onClick={() => this.prevSlide(item.gallery.length, this.state.current)}></PrevArrow>
                            <NextArrow
                              onClick={() => this.nextSlide(item.gallery.length, this.state.current)}></NextArrow>
                            {item.gallery.map((slide, index) => {
                              return (
                                <Carousel index={index} current={this.state.current}>
                                  {index === this.state.current && (<Slider src={slide} alt={item.name}/>)}
                                </Carousel>)


                            })}

                          </CartImg>
                        }


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

