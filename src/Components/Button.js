import styled, { css, keyframes } from 'styled-components';
import is from 'styled-is';

const buttonHover = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Button = styled.button`
  background: #0d2728;
  border-radius: 5px;
  color: white;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  height: 45px;
  opacity: 0.5;
  outline-width: 0;
  ${is('marginTop')`
    margin-top: ${props => props.marginTop};
  `};
  ${is('width')`
    width: ${props => props.width};
  `};
  &:hover {
    animation: ${buttonHover} 0.4s forwards;
  }
  ${props => props.primary
    && css`
      background: #0e30f0;
    `}
  ${props => props.secondary
    && css`
      background: #840405;
    `}
`;

export default Button;
