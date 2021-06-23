import styled from "styled-components";

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
  max-width: 1316px;
  margin: 0 auto;
`;
export const CurrencyCart = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
`;
export const CartItemsTotal = styled.div`
  position: absolute;
  right: -1rem;
  top: -1rem;
  background: #1D1F22;
  border-radius: 100%;
  color: #ffffff;
  //font-family: Roboto;
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 2rem;
  height: 2rem;
  //padding: 0 0 .1rem 0;
`;
