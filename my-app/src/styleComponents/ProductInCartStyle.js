import styled from "styled-components";


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
  opacity: ${props => props.inStock ? '1' : '0.5'};
  pointer-events: ${props => props.inStock ? 'all' : 'none'};
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
  margin: 0 ;
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
    pointer-events: ${props => !props.inStock && 'none'};
  }
`;
export const CounterImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  //width: 14rem;
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
  margin: 1rem 1rem 0 0;
  cursor: pointer;
  font-family: Source Sans Pro, sans-serif;
  font-size: 1.4rem;
  line-height: 160%;
  color: #292929;
  background-color: ${props => props.color ? `${props.color}` : '#ffffff'};
`;
