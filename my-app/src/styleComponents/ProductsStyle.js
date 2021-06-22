import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 23.5rem 0 0 0;
  list-style-type: none;
  flex-wrap: wrap;
`;

export const CartButton = styled.button`
  display: none;
  background-color: #5ECE7B;
  border-radius: 100%;
  padding: 1.5rem 1.4rem;
  position: absolute;
  right: 3.1rem;
  bottom: 8.2rem;
`;
export const Li = styled.li`
  padding: 1rem;
  margin: 2rem;
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
    top: 50%;
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
  width: 35.6rem;
  height: 33.8rem;
  margin: 2rem 0;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const ProductName = styled.p`
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 160%;
  margin: .5rem 0;
  color: #1D1F22;
`;
export const Currency = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 160%;
  color: #1D1F22;
  margin: .5rem 0;
`;
