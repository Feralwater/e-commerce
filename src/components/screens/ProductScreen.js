import React from 'react';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
import {
  Currency,
  Description,
  DescriptionContainer,
  Div,
  Name,
  Price,
  ProductDescription,
} from '../../styleComponents/ProductScreenStyles';
import { Container } from '../../styleComponents/HomeStyles';
import Header from '../header/Header';
import { fetchProducts } from '../../actions/productActions';
import formatCurrency from '../../utils/formatCurrency';
import ImageSwitcher from './ImageSwitcher';
import CartButton from './CartButton';
import DisplayAndValidateProductAttributes from './DisplayAndValidateProductAttributes';

class ProductScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      attributes: {},
      validate: {},
      startValidate: false,
    };
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  setSelectAttribute = (attribute, name) => {
    const { attributes } = this.state;
    this.setState(
      {
        ...this.state,
        attributes: {
          ...attributes,
          [name]: attribute,
        },
      },
    );
  };

  setValidate = (name, boolean) => {
    const { validate } = this.state;
    this.setState({
      validate: {
        ...validate,
        [name]: boolean,
      },
    });
  };

  setValidate2 = (boolean) => {
    this.setState({
      startValidate: boolean,
    });
  };

  render() {
    const {
      currency,
      products,
      match,
    } = this.props;
    const {
      validate,
      attributes,
      startValidate,
    } = this.state;
    const product = products?.find((x) => x.name === match.params.name);

    return (
      <div>
        {
          !products
            ? (<div>Loading...</div>)
            : (
              <>
                <Header />
                <Container>
                  <Div>
                    <ImageSwitcher product={product} match={match} />
                    <DescriptionContainer>
                      <Name>{product.name}</Name>
                      <ProductDescription>{product.category}</ProductDescription>
                      <DisplayAndValidateProductAttributes
                        product={product}
                        validate={validate}
                        startValidate={startValidate}
                        attributes={attributes}
                        setSelectAttribute={this.setSelectAttribute}
                        setValidate={this.setValidate}
                      />
                      <Price>price:</Price>
                      <Currency>
                        {' '}
                        {formatCurrency(product.prices, currency).icon + formatCurrency(product.prices, currency).price}
                      </Currency>
                      <CartButton
                        product={product}
                        attributes={attributes}
                        setValidate2={this.setValidate2}
                      />
                      <Description>
                        <div
                          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }}
                        />
                      </Description>
                    </DescriptionContainer>

                  </Div>
                </Container>
              </>
            )
        }
      </div>
    );
  }
}

export default connect((state) => ({
  products: state.products.items,
  cartItems: state.cart.cartItems,
  currency: state.currency.currency,
}),
{
  fetchProducts,
})(ProductScreen);
