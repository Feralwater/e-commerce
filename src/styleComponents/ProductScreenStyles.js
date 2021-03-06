import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  margin: 16rem 0 0 0;
`;

export const MainImageContainer = styled.div`
  display: flex;
  justify-content: center;
  //align-items: center;
  margin: 0 3rem;
`;

export const Img = styled.img`
  display: block;
  width: 61rem;
  height: 51.1rem;
  object-fit: contain;
`;

export const ImagesContainer = styled.div`
  max-width: 73rem;
  display: flex;
  position: relative;

  &::before {
    width: 61rem;
    height: 51.1rem;
    position: absolute;
    right: 0;
    background-color: rgba(128, 128, 128, 0.075);
    content: '';
  }
`;

export const SmallImagesContainer = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    cursor: pointer;

    &::before {
      width: 8rem;
      height: 8rem;
      position: absolute;
      background-color: rgba(128, 128, 128, 0.075);
      content: '';
    }
  }

  & img {
    display: block;
    width: 8rem;
    height: 8rem;
    object-fit: contain;
    margin-bottom: 3rem;
  }
`;

export const DescriptionContainer = styled.div`
  margin: 0 0 0 10rem;
  color: #1D1F22;
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: 3rem;
  line-height: 27px;
  margin: 0 0 1.6rem 0;
`;

export const ProductDescription = styled.div`
  font-size: 3rem;
  line-height: 27px;
  margin: 0 0 4.6rem 0;
`;

export const Attributes = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.8rem;
  margin: 0 0 .8rem 0;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
`;

export const Price = styled.div`
  margin: 3rem 0 2rem 0;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.8rem;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
`;

export const Currency = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 1.8rem;
  margin: 0 0 3.5rem 0;
`;

export const Description = styled.div`
  font-size: 1.6rem;
  line-height: 160%;
  font-family: "Roboto", sans-serif;
`;

export const ToCartButton = styled.button`
  display: flex;
  padding: 1.6rem 3.2rem;
  width: 29.2rem;
  height: 5.2rem;
  background: ${(properties) => (properties.inStock ? '#5ECE7B' : '#A6A6A6')};
  color: #ffffff;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 120%;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin: 0 0 4rem 0;
  pointer-events: ${(properties) => (properties.inStock ? 'all' : 'none')};
`;

export const Span = styled.span`
  display: flex;
  width: 6.1rem;
  height: 4.3rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 1.2rem 1rem 0;
  cursor: ${(properties) => (properties.inStock && 'pointer')};
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: 0.05em;
  color: ${(properties) => (properties.value === properties.active ? '#ffffff' : '#292929')};
  background-color: ${(properties) => (properties.color ? `${properties.color}` : '#ffffff')};
  background-color: ${(properties) => (!properties.color && properties.value === properties.active && '#000000')};
  border: ${(properties) => (properties.color === properties.active && properties.color ? '2px solid #1D1F22' : '1px solid #1D1F22')};
  box-shadow: ${(properties) => (!properties.validate && properties.startValidate ? '0px 0px .5rem red' : 'none')};
  pointer-events: ${(properties) => (properties.inStock ? 'all' : 'none')};
`;

export const AttributesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
