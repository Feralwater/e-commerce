import React, {Component} from 'react';
import {Nav, NavLink} from "../../styleComponents/NavbarStyle";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from 'react-router-dom'

const categories = [
  'clothes',
  'tech',
]

class Navbar extends Component {
  render() {
    return (

      <>
        <Nav>
          <NavLink to='/' active={this.props.activeCategory}>all</NavLink>
          {categories.map(item => <NavLink to={'/categories/' + item}
                                           key={Math.random() * 10_0000}
                                           item={item}
                                           active={this.props.activeCategory}>{item}</NavLink>)}
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
      activeCategory: ownProps?.match?.params?.categoryName,
    }),
    null
  )
)(Navbar)
