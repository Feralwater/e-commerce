import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';
import { fetchProducts } from '../../actions/productActions';
import {
  A,
  CartButton,
  Category,
  Currency,
  Img,
  ImgContainer,
  Li,
  ProductName,
  Ul,
} from '../../styleComponents/ProductsStyle';
import { addToCart } from '../../actions/cartActions';
import { ReactComponent as Cart } from './svgImages/cart.svg';

class Products extends React.PureComponent {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  addToCartFromPLP = (item, history, addToCart, activeCategory) => {
    if (item.attributes.length === 0) {
      addToCart(item, item.attributes);
    } else {
      history.push(`/categories/${activeCategory || 'all'}/${item.name}`);
    }
  };

  filter = (item) => {
    const { activeCategory } = this.props;
    return (item.category === activeCategory || !activeCategory ? 1 : 0);
  };

  render() {
    const {
      activeCategory,
      products,
      currency,
      history,
      addToCart,
    } = this.props;
    return (
      <div>
        <Category>{activeCategory || 'all'}</Category>
        {
          !products
            ? (<div>Loading...</div>)
            : (
              <Ul>
                {products.filter(this.filter)
                  .map((product) => (
                    <Li inStock={product.inStock} key={product.name}>
                      <A to={`/categories/${activeCategory || 'all'}/${product.name}`}>
                        <span>out of stock</span>
                        <ImgContainer>
                          <Img src={product.gallery[0]} alt={product.title} data-attr="background" />
                        </ImgContainer>
                        <ProductName>
                          {product.name}
                        </ProductName>
                        <Currency>
                          {formatCurrency(product.prices, currency).icon + formatCurrency(product.prices, currency).price}
                        </Currency>
                      </A>
                      <div>
                        <CartButton
                          inStock={product.inStock}
                          onClick={() => {
                            this.addToCartFromPLP(product, history, addToCart, activeCategory);
                          }}
                        >
                          <Cart />
                        </CartButton>
                      </div>
                    </Li>
                  ))}
              </Ul>
            )
        }
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect((state, ownProperties) => ({
    products: state.products.items,
    currency: state.currency.currency,
    activeCategory: ownProperties?.match?.params?.categoryName,
  }), {
    fetchProducts,
    addToCart,
  }),
)(Products);
