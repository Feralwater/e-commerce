import styled from "styled-components";

export const Modal = styled.div`
  background: rgba(57, 55, 72, 0.22);
  position: fixed;
  top: 7.8rem;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: ${props => props.active ? '1' : '0'};
  transition: .5s;
`;


export const ContentContainer = styled.div`
  position: relative;
  max-width: 1316px;
  margin: 0 auto;
`;
export const Content = styled.div`
  padding: 1.5rem;
  background-color: #ffffff;
  width: 32.5rem;
  height: 54rem;
  position: absolute;
  top: 0;
  right: 0;
`;
