import React, {Component} from 'react';
import {Nav, NavLink} from "../../styleComponents/NavbarStyle";
import {connect} from "react-redux";
import {changeCategory} from "../../actions/categoryAction";
import {compose} from "redux";
import {withRouter} from 'react-router-dom'
import {filterProducts} from "../../actions/productActions";


class Navbar extends Component {
  render() {
    console.log(this.props.activeCategory)
    return (

      <>
        <Nav>
          <NavLink to='/'
                   onClick={() => {
                     this.props.changeCategory('all');
                     this.props.filterProducts(this.props.products, this.props.category);
                   }
                   }>all</NavLink>
          <NavLink to='/categories/clothes' onClick={() => {
            this.props.changeCategory('clothes');
            this.props.filterProducts(this.props.products, this.props.category);
          }
          }>clothes</NavLink>
          <NavLink to='/categories/tech' onClick={() => {
            this.props.changeCategory('tech');
            this.props.filterProducts(this.props.products, this.props.category);
          }}>tech</NavLink>
        </Nav>
      </>
    )
      ;
  }
}


export default compose(
  withRouter,
  connect((state, ownProps) => ({
      products: state.products.items,
      category: state.category.category,
      activeCategory: ownProps?.match?.params?.categoryName,
      filteredProducts: state.products.filteredItems,
    }),
    {changeCategory, filterProducts}
  )
)(Navbar)
