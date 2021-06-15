import React, {Component} from 'react';
import formatCurrency from "../../utils/formatCurrency";
import {connect} from "react-redux";
import {fetchProducts} from "../../actions/productActions";

class Products extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div>
        {
          !this.props.products ?
            (<div>Loading...</div>)
            :
            (
              <ul>
                {this.props.products.map(product => (
                  <li key={product._id}>
                    <div>
                      <a href={"#" + product._id}>
                        <img src={product.gallery[0]} alt={product.title}/>
                        <p>
                          {product.name}
                        </p>
                      </a>
                      <div>
                        <div>
                          {formatCurrency(product.prices[0].amount)}
                        </div>
                        <div>
                          <button onClick={() => this.props.addToCart(product)}>
                            add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )
        }

      </div>
    );
  }
}

export default connect((state) => ({products: state.products.items}), {fetchProducts})(Products);
