import React from 'react';
import {
  ImagesContainer,
  Img,
  SmallImagesContainer,
} from '../../styleComponents/ProductScreenStyles';

class ImageSwitcher extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
    };
  }

  setSelectedImg = (index) => {
    this.setState({
      imageIndex: index,
    });
  };

  render() {
    const {
      product,
      match,
    } = this.props;
    const {
      imageIndex,
    } = this.state;
    return (
      <ImagesContainer>
        <SmallImagesContainer>
          {product.gallery.map((img, index) => (
            <img
              key={Math.floor(Math.random() * 100_000)}
              src={img}
              alt={match.params.name}
              onClick={() => {
                this.setSelectedImg(index);
              }}
            />
          ))}
        </SmallImagesContainer>
        <Img src={product.gallery[imageIndex]} alt={match.params.name} />
      </ImagesContainer>
    );
  }
}

export default ImageSwitcher;
