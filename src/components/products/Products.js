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
    const {
      fetchProducts,
      activeCategory,
    } = this.props;
    fetchProducts(activeCategory || 'all');
  }

  componentDidUpdate(prevProps) {
    const {
      fetchProducts,
      activeCategory,
    } = this.props;
    if (prevProps.activeCategory !== activeCategory) {
      fetchProducts(activeCategory || 'all');
    }
  }

  addToCartFromPLP = (item, history, addToCart, activeCategory) => {
    if (item.attributes.length === 0) {
      addToCart(item, item.attributes);
    } else {
      history.push(`/categories/${activeCategory || 'all'}/${item.name}`);
    }
  };

  getCardLink = (activeCategory, product, currency) => (
    <A to={`/categories/${activeCategory || 'all'}/${product.name}`}>
      <span>out of stock</span>
      <ImgContainer>
        <Img src={product.gallery[0]} alt={product.title} />
      </ImgContainer>
      <ProductName>
        {product.name}
      </ProductName>
      <Currency>
        {formatCurrency(product.prices, currency).icon + formatCurrency(product.prices, currency).price}
      </Currency>
    </A>
  );

  getCartButton = (product, history, addToCart, activeCategory) => (
    <CartButton
      inStock={product.inStock}
      onClick={() => {
        this.addToCartFromPLP(product, history, addToCart, activeCategory);
      }}
    >
      <Cart />
    </CartButton>
  );

  getItem = (product, activeCategory, currency, history, addToCart) => (
    <Li inStock={product.inStock} key={product.name}>
      {this.getCardLink(activeCategory, product, currency)}
      {this.getCartButton(product, history, addToCart, activeCategory)}
    </Li>
  );

  getProductList = (products, activeCategory, currency, history, addToCart) => (
    <Ul>
      {products.map((product) => this.getItem(product, activeCategory, currency, history, addToCart))}
    </Ul>
  );

  render() {
    const {
      activeCategory,
      products,
      currency,
      history,
      addToCart,
    } = this.props;
    return (
      <>
        <Category>{activeCategory || 'all category'}</Category>
        {
          !products
            ? (<div>Loading...</div>)
            : this.getProductList(products, activeCategory, currency, history, addToCart)
        }
      </>
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
