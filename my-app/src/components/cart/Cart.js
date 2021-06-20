import React, {Component} from 'react';
import formatCurrency from "../../utils/formatCurrency";
import Fade from "react-reveal/Fade";
import ProductInCart from "../products/ProductInCart";

class Cart extends Component {
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   const {cartItems} = this.props;
  //   localStorage.setItem(cartItems.name, )
  // }
  render() {
    const {cartItems} = this.props;
    return (
      <div>
        {cartItems === 0 ?
          <div>Cart is empty</div>
          :
          <div> My Bag, {cartItems.length} items </div>}
        <div>

            <ul>
              {cartItems.map(item => (
                <li key={item._id}>
                  {/*<div>*/}
                  {/*  <img src={item.gallery[0]} alt={item.name}/>*/}
                  {/*</div>*/}
                  {/*<div>*/}
                  {/*  <div>{item.name}</div>*/}
                  {/*  <div>*/}
                  {/*    {formatCurrency(item.prices[0].amount)} x {item.count} {' '}*/}
                  {/*    <button onClick={() => this.props.removeFromCart(item)}>Remove</button>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  <ProductInCart/>
                </li>
              ))}
            </ul>

        </div>
        {cartItems.length !== 0 && (
          <div>
            Total
            <div>
              {formatCurrency(cartItems.reduce((x, y) => x + (y.prices[0].amount * y.count), 0))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
