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
  line-height: 120%;
  text-transform: uppercase;
  color: #1D1F22;
  margin: 0 3rem 0 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #5ECE7B;
    text-decoration: underline;
  }

  @media screen and (max-width: 40rem) {

  }
`;
