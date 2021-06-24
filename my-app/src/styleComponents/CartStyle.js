import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 14rem 0 0 0;
`;
export const CartTitle = styled.div`
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 4rem;
  text-transform: uppercase;
  color: #1D1F22;
`;
export const CardContainer = styled.li`
  display: flex;
  border-top: 1px solid #E5E5E5;
  justify-content: space-between;
  color: #1D1F22;
  padding: 2rem 0;
  opacity: ${props => props.inStock ? '1' : '0.5'};
  pointer-events: ${props => props.inStock ? 'all' : 'none'};
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
  line-height: 2.7rem;
  margin: 0 0 1.6rem 0;
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
    padding: .2rem 1rem .3rem 1rem;
    cursor: pointer;
    user-select: none;
    pointer-events: all;
    margin: 0;
  }

  & p:first-child {
    pointer-events: ${props => !props.inStock && 'none'};
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
`;
