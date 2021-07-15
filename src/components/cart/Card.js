import React from 'react';
import { connect } from 'react-redux';
import { addToCart, counterDecrement, counterIncrement } from '../../actions/cartActions';
import { ProductDescription } from '../../styleComponents/ProductInCartStyle';
import {
  Carousel,
  CartImg,
  CounterContainer,
  Features,
  ItemDescription,
  ItemName,
  ItemPrice,
  NextArrow,
  PrevArrow,
  RightElementsContainer,
  Slider,
} from '../../styleComponents/CartStyle';
import formatCurrency from '../../utils/formatCurrency';
import { AttributesContainer, Span } from '../../styleComponents/ProductScreenStyles';
import { CardWrapper } from '../../styleComponents/CardStyle';

class Card extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      current: 0,
    };
  }

  nextSlide = (length, current) => {
    this.setState({
      current: current === length - 1 ? 0 : current + 1,
    });
  };

  prevSlide = (length, current) => {
    this.setState({
      current: current === 0 ? length - 1 : current - 1,
    });
  };

  render() {
    const {
      item,
      currency,
      counterIncrement,
      counterDecrement,
    } = this.props;
    const { current } = this.state;
    return (
      <CardWrapper>
        <ProductDescription>
          <ItemName>{item.name}</ItemName>
          <ItemDescription>{item.category}</ItemDescription>
          <ItemPrice>
            {formatCurrency(item.prices, currency).icon + formatCurrency(item.prices, currency).price}
          </ItemPrice>

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
                          active={item.params[attribute.name]}
                          value={x.value}
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

        <RightElementsContainer>

          <CounterContainer inStock={item.inStock}>
            <p onClick={() => counterIncrement(item)}>+</p>
            <div>{item.count}</div>
            <p onClick={() => counterDecrement(item)}>–</p>
          </CounterContainer>

          {!Array.isArray(item.gallery) || item.gallery.length <= 0

            ? <img src="https://acoustic-atm.ru/userfiles/default_images/default.jpg" alt="" />
            : (
              <CartImg>
                <PrevArrow
                  onClick={() => this.prevSlide(item.gallery.length, current)}
                />
                <NextArrow
                  onClick={() => this.nextSlide(item.gallery.length, current)}
                />
                {item.gallery.map((slide, index) => (
                  <Carousel
                    index={index}
                    key={Math.random() * 100_000}
                    current={current}
                  >
                    {index === current && (
                      <Slider src={slide} alt={item.name} />)}
                  </Carousel>
                ))}

              </CartImg>
            )}

        </RightElementsContainer>
      </CardWrapper>
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
})(Card);
