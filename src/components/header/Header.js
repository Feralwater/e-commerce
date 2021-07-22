import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../navbar/Navbar';
import {
  CartItemsTotal,
  Currency,
  CurrencyCart, CurrencyCartContainer,
  CurrencyList,
  HeaderContainer,
  HeaderWrapper,
  LogoContainer,
  NavbarContainer,
} from '../../styleComponents/HeaderStyles';
import ModalCart from '../cart/ModalCart';
import { changeCurrency } from '../../actions/currencyAction';
import { ReactComponent as Logo } from './svgImages/logo.svg';
import { ReactComponent as EmptyCart } from './svgImages/emptyCart.svg';

const a = {
  USD: '$ USD',
  GBP: '£ GBP',
  AUD: '$ AUD',
  JPY: '¥ JPY',
  RUB: '₽ RUB',
};

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      currencyActive: false,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.outsideCurrencyClose, true);
  }

  componentWillUnmount() {
    window.onscroll = () => {
    };
  }

  outsideCurrencyClose = (e) => {
    const el = e.target.closest('#currencyList');
    if (!el) {
      this.setState({
        currencyActive: false,
      });
    }
  };

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
      <HeaderWrapper
        onClick={() => {
          if (modalActive) {
            this.setModalActive(false);
          }
        }}
      >
        <HeaderContainer>
          <NavbarContainer>
            <Navbar />
          </NavbarContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <CurrencyCartContainer>
            <CurrencyCart id="currencyList">
              <Currency
                active={modalActive ? false : currencyActive}
                onClick={() => {
                  this.setModalActive(false);
                  this.setCurrencyActive(!currencyActive);
                }}
              >
                {icon}
              </Currency>
              <CurrencyList
                active={modalActive ? false : currencyActive}
              >
                {Object.entries(a)
                  .map(([currency, currencyValue]) => (
                    <li
                      key={Math.random() * 100_000}
                      onClick={() => {
                        changeCurrency(currency);
                        this.setCurrencyActive(!currencyActive);
                      }}
                    >
                      {currencyValue}
                    </li>
                  ))}
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
          </CurrencyCartContainer>
          <ModalCart
            active={modalActive}
            setModalActive={this.setModalActive}
          />
        </HeaderContainer>
      </HeaderWrapper>
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
