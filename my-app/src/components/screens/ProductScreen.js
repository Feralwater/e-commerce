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

class ProductScreen extends Component {
  constructor() {
    super();
    this.state = {
      selectedImg: '',
    }
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  setSelectedImg = (img) => {
    this.setState({
      selectedImg: img,
    })
  }

  render() {
    const product = this.props.products.find(x => x.name === this.props.match.params.name)
    return (<>
      {
        !this.props.products ?
          (<div>Loading...</div>)
          :
          (<Container>
            <Div>


              <ImagesContainer>
                <SmallImagesContainer>
                  {product.gallery.map(img => (
                    <img
                      key={Math.floor(Math.random() * 10_0000)}
                      src={img} alt={this.props.match.params.name}
                      onClick={() => {
                        this.setSelectedImg(img)
                      }}
                    />))
                  }
                </SmallImagesContainer>
                <Img src={this.state.selectedImg} alt={this.props.match.params.name}/>
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
                <Currency>{product.prices[0].amount}</Currency>
                <ToCartButton>add to cart</ToCartButton>
                <Description>{product.description}</Description>
              </DescriptionContainer>
            </Div>
          </Container>)
      }
    </>);
  }
}


export default connect((state) => ({
    products: state.products.items,
  }),
  {fetchProducts}
)(ProductScreen);
