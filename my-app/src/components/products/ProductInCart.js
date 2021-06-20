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
  Ul
} from "../../styleComponents/ProductInCartStyle";

class ProductInCart extends Component {

  render() {
    const {cartItems} = this.props;
    return (

      <div>
        <Ul>
          {cartItems.map(item => (
            <Li key={item._id}>
              <ProductDescription>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>
                  {formatCurrency(item.prices[0].amount)}
                </ProductPrice>
                <div>size</div>
              </ProductDescription>

              <CounterImageContainer>

                <Counter>
                  <p>+</p>
                  <div>{item.count}</div>
                  <p>-</p>
                </Counter>

                <CartImage>
                  <Img src={item.gallery[0]} alt={item.name}/>
                </CartImage>

              </CounterImageContainer>
              {/*<button onClick={() => this.props.removeFromCart(item)}>Remove</button>*/}

            </Li>
          ))}
        </Ul>
      </div>

    );
  }
}

export default ProductInCart;
