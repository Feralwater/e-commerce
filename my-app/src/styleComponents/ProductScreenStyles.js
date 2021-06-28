import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  margin: 14rem 0 0 0;
`;
export const Img = styled.img`
  display: block;
  cursor: pointer;
  width: 61rem;
  height: 51.1rem;
  object-fit: contain;
  margin: 0 3rem;
`;
export const ImagesContainer = styled.div`
  max-width: 70rem;
  display: flex;
`;
export const SmallImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & img {
    display: block;
    cursor: pointer;
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    padding: 0 0 3rem 0;
  }
`;
export const DescriptionContainer = styled.div`
  margin: 0 0 0 7rem;
  color: #1D1F22;
`;
export const Name = styled.div`
  font-weight: 600;
  font-size: 3rem;
  line-height: 27px;
  margin: 0 0 1.6rem 0;
`;

export const Attributes = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 1.8rem;
  margin: 0 0 .8rem 0;
`;
export const Price = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 1.8rem;
  margin: 0 0 1rem 0;
`;
export const Currency = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 1.8rem;
  margin: 0 0 2rem 0;
`;
export const Description = styled.div`
  font-size: 1.6rem;
  line-height: 160%;
`;
export const ToCartButton = styled.button`
  display: flex;
  padding: 1.6rem 3.2rem;
  width: 29.2rem;
  height: 5.2rem;
  background: #5ECE7B;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 120%;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin: 0 0 4rem 0;
`;
export const Span = styled.span`
  display: flex;
  width: 6.3rem;
  height: 4.5rem;
  border: 1px solid #1D1F22;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 1.2rem 1rem 0;
  cursor: pointer;
  font-family: Source Sans Pro, sans-serif;
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: 0.05em;
  color: #292929;
  background-color: ${props => props.color ? `${props.color}` : '#ffffff'};
`;

export const AttributesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
