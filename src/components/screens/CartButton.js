import React from 'react';
import { connect } from 'react-redux';
import { ToCartButton } from '../../styleComponents/ProductScreenStyles';
import { addToCart } from '../../actions/cartActions';

class CartButton extends React.PureComponent {
  getToCartButton = (product, attributes, setValidate2, addToCart) => (
    <ToCartButton
      inStock={product.inStock}
      onClick={() => {
        if (Object.keys(attributes).length < product.attributes.length) {
          setValidate2(true);
        } else {
          addToCart(product, attributes);
        }
      }}
    >
      {product.inStock ? 'add to cart' : 'out of stock'}
    </ToCartButton>
  );

  render() {
    const {
      product,
      attributes,
      setValidate2,
      addToCart,
    } = this.props;
    return this.getToCartButton(product, attributes, setValidate2, addToCart);
  }
}

export default connect(null,
  {
    addToCart,
  })(CartButton);
