import React from 'react';
import { connect } from 'react-redux';
import { ToCartButton } from '../../styleComponents/ProductScreenStyles';
import { addToCart } from '../../actions/cartActions';

class CartButton extends React.PureComponent {
  render() {
    const {
      product,
      attributes,
      setValidate2,
      addToCart,
    } = this.props;
    return (
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
  }
}

export default connect(null,
  {
    addToCart,
  })(CartButton);
