import styled from 'styled-components';
import is from 'styled-is';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: initial;
  ${is('direction')`
    flex-direction: ${props => props.direction};
  `};
  ${is('width')`
    width: ${props => props.width};
  `};
  ${is('justify')`
    justify-content: ${props => props.justify};
  `};
`;

export default StyledWrapper;
