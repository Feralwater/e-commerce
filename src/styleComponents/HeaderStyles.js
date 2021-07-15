import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  z-index: 1000;
  max-width: 1238px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
export const CurrencyCart = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  flex: 0 1 50%;
  justify-content: flex-end;
`;
export const CartItemsTotal = styled.div`
  position: absolute;
  right: -1rem;
  top: -1rem;
  background: #1D1F22;
  border-radius: 100%;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`;
export const CurrencyList = styled.ul`
  display: ${(properties) => !properties.active && 'none'};
  list-style-type: none;
  margin: 0;
  padding-inline-start: 0;
  width: 13.9rem;
  height: 16.9rem;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 160%;
  background: #FFFFFF;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  position: absolute;
  top: 4rem;
  right: -4.4rem;
  overflow: auto;

  & li {
    padding: 2rem 2rem 0 2rem;
    cursor: pointer;

    &:last-child {
      padding-bottom: 2rem;
    }
  }
`;
export const Currency = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 160%;
  color: #1D1F22;
  margin: 0 2.2rem 0 0;
  cursor: pointer;

  &:after {
    border-style: solid;
    border-width: 0.1rem 0.1rem 0 0;
    content: '';
    display: inline-block;
    height: 0.4rem;
    vertical-align: middle;
    width: 0.4rem;
    transform: ${(properties) => (properties.active ? 'rotate(-45deg)' : 'rotate(135deg)')};
    margin: 0 0 0 1rem;
  }
`;
export const NavbarContainer = styled.div`
  flex: 0 1 50%;
`;
export const LogoContainer = styled.div`
  padding-top: 1rem;
`;
