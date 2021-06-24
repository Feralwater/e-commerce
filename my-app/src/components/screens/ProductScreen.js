import React, {Component} from 'react';
import {
  Attributes,
  AttributesContainer,
  Currency,
  Description,
  DescriptionContainer,
  Div,
  ImagesContainer,
  Img,
  Name,
  Price,
  SmallImagesContainer,
  Span,
  ToCartButton
} from "../../styleComponents/ProductScreenStyles";
import {fetchProducts} from "../../actions/productActions";
import {connect} from "react-redux";
import {Container} from "../../styleComponents/HomeStyles";
import Header from "../header/Header";
import {addToCart} from "../../actions/cartActions";
import formatCurrency from "../../utils/formatCurrency";

class ProductScreen extends Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
    }
  }

  setSelectedImg = (index) => {
    this.setState({
      imageIndex: index,
    })
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {

    const product = this.props.products?.find(x => x.name === this.props.match.params.name)

    return (<>
      {
        !this.props.products ?
          (<div>Loading...</div>)
          :
          (<>
            <Header/>
            <Container>
              <Div>


                <ImagesContainer>
                  <SmallImagesContainer>
                    {product.gallery.map((img, index) => (
                      <img
                        key={Math.floor(Math.random() * 10_0000)}
                        src={img} alt={this.props.match.params.name}
                        onClick={() => {
                          this.setSelectedImg(index)
                        }}
                      />))
                    }
                  </SmallImagesContainer>
                  <Img src={product.gallery[this.state.imageIndex]} alt={this.props.match.params.name}/>
                </ImagesContainer>


                <DescriptionContainer>
                  <Name>{product.name}</Name>
                  <div>???</div>
                  <Description>

                    {product.attributes.map(x => x.type === 'swatch' ?
                      (
                        (<div key={Math.random() * 10_0000}>
                            <Attributes>{x.name}:</Attributes>
                            <AttributesContainer>
                              {x.items.map(x =>
                                <Span color={x.value} key={Math.random() * 10_0000}></Span>)
                              }
                            </AttributesContainer>
                          </div>
                        )
                      )
                      :
                      (
                        (<div key={Math.random() * 10_0000}>
                            <Attributes>{x.name}:</Attributes>
                            <AttributesContainer>{x.items.map(x => <Span
                              key={Math.random() * 10_0000}> {x.value}</Span>)}</AttributesContainer>
                          </div>
                        )
                      )
                    )
                    }


                  </Description>
                  <Price>price:</Price>
                  <Currency>{formatCurrency(product.prices,"RUB")}</Currency>
                  <ToCartButton onClick={() => this.props.addToCart(product)}>add to cart</ToCartButton>
                  <Description>{<div dangerouslySetInnerHTML={{__html: product.description}}></div>}</Description>
                </DescriptionContainer>
              </Div>
            </Container>
          </>)
      }
    </>);
  }
}


export default connect((state) => ({
    products: state.products.items,
    cartItems: state.cart.cartItems,
  }),
  {fetchProducts, addToCart}
)(ProductScreen);
