import React, {Component} from 'react';
import {connect} from "react-redux";
import {addToCart, counterDecrement, removeFromCart} from "../../actions/cartActions";
import {ProductDescription, RemoveButton} from "../../styleComponents/ProductInCartStyle";
import {
  Carousel,
  CartImg,
  CounterContainer,
  Features,
  ItemDescription,
  ItemName,
  ItemPrice, NextArrow, PrevArrow,
  RightElementsContainer, Slider
} from "../../styleComponents/CartStyle";
import formatCurrency from "../../utils/formatCurrency";
import {Attributes, AttributesContainer, Span} from "../../styleComponents/ProductScreenStyles";
import {CardWrapper} from "../../styleComponents/CardStyle";


class Card extends Component {
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
    return (
      <CardWrapper>
        <ProductDescription>
          <ItemName>{this.props.item.name}</ItemName>
          <ItemDescription>description???</ItemDescription>
          <ItemPrice>
            {/*{formatCurrency(this.props.item.prices, this.props.currency)}*/}
          </ItemPrice>

          <Features>
            {this.props.item.attributes.map(x => x.type === 'swatch' ?
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

          <CounterContainer inStock={this.props.item.inStock}>
            <p onClick={() => this.props.addToCart(this.props.item)}>+</p>
            <div>{this.props.item.count}</div>
            <p onClick={() => this.props.counterDecrement(this.props.item)}>-</p>
          </CounterContainer>

          {!Array.isArray(this.props.item.gallery) || this.props.item.gallery.length <= 0 ?

            <img src="https://acoustic-atm.ru/userfiles/default_images/default.jpg" alt=""/>
            :
            <CartImg>
              <PrevArrow
                onClick={() => this.prevSlide(this.props.item.gallery.length, this.state.current)}></PrevArrow>
              <NextArrow
                onClick={() => this.nextSlide(this.props.item.gallery.length, this.state.current)}></NextArrow>
              {this.props.item.gallery.map((slide, index) => {
                return (
                  <Carousel index={index} current={this.state.current}>
                    {index === this.state.current && (<Slider src={slide} alt={this.props.item.name}/>)}
                  </Carousel>)


              })}

            </CartImg>
          }


        </RightElementsContainer>
        <RemoveButton onClick={() => this.props.removeFromCart(this.props.item)}>x</RemoveButton>
      </CardWrapper>
    );
  }
}


export default connect((state) => ({
    cartItems: state.cart.cartItems,
    currency: state.currency.currency,
  }),
  {removeFromCart, counterDecrement, addToCart}
)(Card);
