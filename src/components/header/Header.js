import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../navbar/Navbar';
import {
  CartItemsTotal,
  Currency,
  CurrencyCart,
  CurrencyList,
  HeaderContainer,
  LogoContainer,
  NavbarContainer,
} from '../../styleComponents/HeaderStyles';
import ModalCart from '../cart/ModalCart';
import { changeCurrency } from '../../actions/currencyAction';
import { ReactComponent as Logo } from './svgImages/logo.svg';
import { ReactComponent as EmptyCart } from './svgImages/emptyCart.svg';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      currencyActive: false,
    };
  }

  setCurrencyActive = (boolean) => {
    this.setState({
      currencyActive: boolean,
    });
  };

  setModalActive = (boolean) => {
    this.setState({
      modalActive: boolean,
    });
  };

  disableScroll = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  };

  render() {
    const {
      currencyActive,
      modalActive,
    } = this.state;
    const {
      icon,
      changeCurrency,
      cartItems,
    } = this.props;
    return (
      <HeaderContainer>
        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <CurrencyCart>
          <Currency
            active={currencyActive}
            onClick={() => this.setCurrencyActive(!currencyActive)}
          >
            {icon}
          </Currency>
          <CurrencyList active={currencyActive}>
            <li onClick={() => {
              changeCurrency('USD');
              this.setCurrencyActive(!currencyActive);
            }}
            >
              $ USD
            </li>
            <li onClick={() => {
              changeCurrency('GBP');
              this.setCurrencyActive(!currencyActive);
            }}
            >
              £ GBP
            </li>
            <li onClick={() => {
              changeCurrency('AUD');
              this.setCurrencyActive(!currencyActive);
            }}
            >
              $ AUD
            </li>
            <li onClick={() => {
              changeCurrency('JPY');
              this.setCurrencyActive(!currencyActive);
            }}
            >
              ¥ JPY
            </li>
            <li onClick={() => {
              changeCurrency('RUB');
              this.setCurrencyActive(!currencyActive);
            }}
            >
              ₽ RUB
            </li>
          </CurrencyList>
          <button
            type="button"
            onClick={() => {
              this.disableScroll();
              this.setModalActive(true);
            }}
          >
            <EmptyCart />
          </button>
          {cartItems.length > 0
          && <CartItemsTotal>{cartItems.reduce((total, current) => total + current.count, 0)}</CartItemsTotal>}
        </CurrencyCart>
        <ModalCart
          active={modalActive}
          setModalActive={this.setModalActive}
        />
      </HeaderContainer>
    );
  }
}

export default connect((state) => ({
  cartItems: state.cart.cartItems,
  currency: state.currency.currency,
  icon: state.currency.icon,
  products: state.products.items,
}),
{ changeCurrency })(Header);
