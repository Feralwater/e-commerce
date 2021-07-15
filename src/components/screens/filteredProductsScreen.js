import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import { Container } from '../../styleComponents/HomeStyles';
import Products from '../products/Products';

class FilteredProductsScreen extends React.PureComponent {
  render() {
    return (
      <div>
        <Container>
          <Header />
          <Products />
        </Container>
      </div>
    );
  }
}

export default connect((state) => ({
  products: state.products.items,
}),
null)(FilteredProductsScreen);
