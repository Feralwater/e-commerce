import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Nav, NavLink } from '../../styleComponents/NavbarStyle';

const categories = [
  'clothes',
  'tech',
];

class Navbar extends Component {
  render() {
    const { activeCategory } = this.props;
    return (
      <>
        <Nav>
          <NavLink to="/" active={activeCategory}>all</NavLink>
          {categories.map((item) => (
            <NavLink
              to={`/categories/${item}`}
              key={Math.random() * 100_000}
              item={item}
              active={activeCategory}
            >
              {item}
            </NavLink>
          ))}
        </Nav>
      </>
    );
  }
}

export default compose(
  withRouter,
  connect((state, ownProperties) => ({
    products: state.products.items,
    activeCategory: ownProperties?.match?.params?.categoryName,
  }),
  null),
)(Navbar);
