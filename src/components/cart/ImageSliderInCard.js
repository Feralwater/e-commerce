import React from 'react';
import {
  Carousel, CartImg, NextArrow, PrevArrow, Slider,
} from '../../styleComponents/CartStyle';

class ImageSliderInCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  nextSlide = (length, current) => {
    this.setState({
      current: current === length - 1 ? 0 : current + 1,
    });
  };

  prevSlide = (length, current) => {
    this.setState({
      current: current === 0 ? length - 1 : current - 1,
    });
  };

  render() {
    const {
      item,
    } = this.props;
    const { current } = this.state;
    return (
      <div>
        {!Array.isArray(item.gallery) || item.gallery.length <= 0

          ? <img src="https://acoustic-atm.ru/userfiles/default_images/default.jpg" alt="" />
          : (
            <CartImg>
              <PrevArrow
                onClick={() => this.prevSlide(item.gallery.length, current)}
              />
              <NextArrow
                onClick={() => this.nextSlide(item.gallery.length, current)}
              />
              {item.gallery.map((slide, index) => (
                <Carousel
                  index={index}
                  key={Math.random() * 100_000}
                  current={current}
                >
                  {index === current && (
                    <Slider src={slide} alt={item.name} />)}
                </Carousel>
              ))}

            </CartImg>
          )}
      </div>
    );
  }
}

export default ImageSliderInCard;
