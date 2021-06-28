import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const Nav = styled.nav`
  background: transparent;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const NavLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  text-transform: uppercase;
  border-bottom: ${props => props.active === props.item ? '2px solid #5ece7b' : 'none'};
  color: ${props => props.active === props.item ? '#5ECE7B' : '#1D1F22'};
  margin: 0 1.6rem 0 0;
  padding:  3rem 1.6rem;
  cursor: pointer;
  text-decoration: none;
`;
