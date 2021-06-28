import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Ul = styled.ul`
  //display: flex;
  //align-items: center;
  //justify-content: space-between;
  padding: 0;
  list-style-type: none;
  //flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8.5rem 5.5rem;
`;

export const CartButton = styled.button`
  display: none;
  background-color: #5ECE7B;
  border-radius: 100%;
  padding: 1.5rem 1.4rem;
  position: absolute;
  right: 2.7rem;
  bottom: 6.8rem;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
`;
export const Li = styled.li`
  //padding: 1rem;
  //margin: 2rem;
  position: relative;
  opacity: ${props => props.inStock ? '1' : '0.5'};
  pointer-events: ${props => props.inStock ? 'all' : 'none'};

  &:hover ${CartButton} {
    display: flex;
  }

  & span {
    text-transform: uppercase;
    font-size: 2.4rem;
    position: absolute;
    top: calc(50% + 1rem);
    display: ${props => props.inStock ? 'none' : 'flex'};
    width: 100%;
    align-items: center;
    justify-content: center;
    transform: translateY(-60%);
    height: 100%;
    color: #8D8F9A;
  }

`;
export const A = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 1rem;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    transform: scale(1.1);
  }
`;
export const ImgContainer = styled.div`
  width: 35.4rem;
  height: 33rem;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ProductName = styled.p`
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 160%;
  margin: 2.4rem 0 0 0;
  color: #1D1F22;
`;
export const Currency = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 160%;
  color: #1D1F22;
  margin: 0;
`;
export const Category = styled.div`
  margin: 16rem 0 11rem 0;
  font-size: 4.2rem;
  line-height: 160%;
  color: #1D1F22;

  &:first-letter {
    text-transform: uppercase;
  }
`;
