import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 14rem 0 0 0;
  max-width: 109.7rem;
`;

export const CartTitle = styled.div`
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 4rem;
  text-transform: uppercase;
  color: #1D1F22;
  margin: 16rem 0 6rem 0;
`;
export const CardContainer = styled.li`
  opacity: ${(properties) => (properties.inStock ? '1' : '0.5')};
  pointer-events: ${(properties) => (properties.inStock ? 'all' : 'none')};
`;
export const ItemName = styled.div`
  font-weight: 600;
  font-size: 3rem;
  line-height: 2.7rem;
  margin: 0 0 1.6rem 0;
`;
export const ItemDescription = styled.div`
  font-weight: 300;
  font-size: 3rem;
  line-height: 1.5rem;
  margin: 0 0 1.2rem 0;
`;
export const ItemPrice = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 1.8rem;
  margin: 0 0 1.6rem 0;
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  font-size: 2.4rem;
  color: #1D1F22;
  align-items: center;

  & p {
    border: 1px solid #1D1F22;
    width: 4.4rem;
    height: 4.4rem;
    text-align: center;
    cursor: pointer;
    user-select: none;
    pointer-events: all;
    margin: 0;
    font-size: 3.4rem;
    font-weight: 300;
    font-family: "Roboto", sans-serif;
  }

  & p:first-child {
    pointer-events: ${(properties) => !properties.inStock && 'none'};
  }
`;
export const RightElementsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
`;
export const Features = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const CartImg = styled.div`
  width: 14.1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrevArrow = styled.span`
  position: absolute;
  top: 50%;
  left: .9rem;

  &:after {
    border-style: solid;
    border-width: 0.2rem 0 0 0.2rem;
    content: '';
    display: inline-block;
    vertical-align: middle;
    transform: rotate(-45deg);
    margin: 0;
    padding: .4rem;
    cursor: pointer;
    color: #ffffff;
    z-index: 10;
    user-select: none;
  }
`;
export const NextArrow = styled.span`
  position: absolute;
  top: 50%;
  right: .9rem;

  &:after {
    border-style: solid;
    border-width: 0 0.2rem 0.2rem 0;
    content: '';
    display: inline-block;
    vertical-align: middle;
    transform: rotate(-45deg);
    margin: 0;
    padding: .4rem;
    cursor: pointer;
    color: #ffffff;
    z-index: 10;
    user-select: none;
  }
`;
export const Slider = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

`;
export const Carousel = styled.div`
  // opacity: ${(properties) => (properties.index === properties.current ? '1' : '0.8')};
  // transition: .5s ease-out;
`;
