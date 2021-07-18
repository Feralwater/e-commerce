import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  padding-inline-start: 0;
`;
export const Li = styled.li`
  display: flex;
  width: 100%;
  min-height: 13.7rem;
  justify-content: space-between;
  margin-bottom: 4.1rem;
  position: relative;
  opacity: ${(properties) => (properties.inStock ? '1' : '0.5')};
  pointer-events: ${(properties) => (properties.inStock ? 'all' : 'none')};
`;
export const CartImage = styled.div`
  width: 10.5rem;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProductName = styled.p`
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 160%;
  display: flex;
  //align-items: center;
  color: #1D1F22;
  margin: 0;
`;
export const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1D1F22;
  margin: 0;
`;
export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1.6rem;
  color: #1D1F22;
  align-items: center;

  & p {
    border: 1px solid #1D1F22;
    padding: .2rem .8rem;
    margin: 0;
    cursor: pointer;
    user-select: none;
    pointer-events: all;
  }

  & p:first-child {
    pointer-events: ${(properties) => !properties.inStock && 'none'};
  }
`;
export const CounterImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 0 14rem;
`;

export const Span = styled.span`
  display: flex;
  min-width: 2rem;
  min-height: 2.4rem;
  padding: 0 .2rem;
  border: 1px solid #1D1F22;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: .5rem 1rem 0 0;
  user-select: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.4rem;
  line-height: 160%;
  color: ${(properties) => (properties.value === properties.active ? '#ffffff' : '#292929')};
  background-color: ${(properties) => (properties.color ? `${properties.color}` : '#ffffff')};
  background-color: ${(properties) => (!properties.color && properties.value === properties.active && '#000000')};
  border: ${(properties) => (properties.color === properties.active && properties.color ? '2px solid #1D1F22' : '1px solid #1D1F22')};
`;
export const AttributeName = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
  margin: 1rem 0 0 0;
  color: #1D1F22;
`;
