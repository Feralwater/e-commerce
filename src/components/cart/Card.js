import React from 'react';
import { connect } from 'react-redux';
import { addToCart, counterDecrement, counterIncrement } from '../../actions/cartActions';
import { ProductDescription } from '../../styleComponents/ProductInCartStyle';
import {
  CounterContainer,
  ItemDescription,
  ItemName,
  ItemPrice,
  RightElementsContainer,
} from '../../styleComponents/CartStyle';
import formatCurrency from '../../utils/formatCurrency';
import { CardWrapper } from '../../styleComponents/CardStyle';
import ImageSliderInCard from './ImageSliderInCard';
import ChooseProductFeaturesDisplay from './ChooseProductFeaturesDisplay';

class Card extends React.PureComponent {
  render() {
    const {
      item,
      currency,
      counterIncrement,
      counterDecrement,
    } = this.props;
    return (
      <CardWrapper>
        <ProductDescription>
          <ItemName>{item.name}</ItemName>
          <ItemDescription>{item.category}</ItemDescription>
          <ItemPrice>
            {formatCurrency(item.prices, currency).icon + formatCurrency(item.prices, currency).price}
          </ItemPrice>
          <ChooseProductFeaturesDisplay item={item} />
        </ProductDescription>
        <RightElementsContainer>
          <CounterContainer inStock={item.inStock}>
            <p onClick={() => counterIncrement(item)}>+</p>
            <div>{item.count}</div>
            <p onClick={() => counterDecrement(item)}>–</p>
          </CounterContainer>
          <ImageSliderInCard item={item} />
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
