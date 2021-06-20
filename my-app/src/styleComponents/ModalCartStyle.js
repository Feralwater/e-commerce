import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';

export const Modal = styled.div`
  background: rgba(57, 55, 72, 0.22);
  position: fixed;
  top: 7.8rem;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: ${props => props.active ? '1' : '0'};
  display: ${props => !props.active && 'none'};
  transition: .5s;
  pointer-events: all;
`;


export const ContentContainer = styled.div`
  position: relative;
  max-width: 1316px;
  margin: 0 auto;
 
`;
export const Content = styled.div`
  padding: .8rem 1.5rem 2rem 1.3rem;
  background-color: #ffffff;
  width: 29.7rem;
  height: 54rem;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const ViewButton = styled(Link)`
  display: inline-block;
  padding: 1.3rem 3rem;
  background: #FFFFFF;
  border: 1px solid #1D1F22;
  text-transform: uppercase;
  color: #1D1F22;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 120%;
  text-decoration: none;
`;

export const CheckButton = styled(Link)`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 120%;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  background: #5ECE7B;
  padding: 1.4rem 3rem;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  //font-family: Roboto, sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  color: #1D1F22;
`;
export const CartBottomWrapper = styled.div`
  margin-top: auto;
`;
export const Title = styled.div`
  font-size: 1.6rem;
  line-height: 160%;
  color: #1D1F22;
  & span{
    font-weight: 600;
  }
`;
