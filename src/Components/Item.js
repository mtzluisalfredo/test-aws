import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Span } from './Text';
import StyledWrapper from './StyledWrapper';
import trashIcon from '../assets/trash-icon.png';

const Container = styled.button`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background: #d8e8e9;
  color: white;
  width: 100%;
  border: none;
  cursor: pointer;
  align-items: center;
  font-size: 16px;
  height: 65px;
  margin-bottom: 5px;
  outline-width: 0;
    &:hover #kid {
      background: none;
      display: flex;
      margin-right: 5px;
    }
`;

const Kid = styled.button`
  display: none;
  border: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  background: none;
  outline-width: 0;
  width: 20%;
  height: 20px;
  img {
    height: 20px;
  }
`;

const Item = ({
  clickItem,
  deleteItem,
  description,
  name,
  idItem,
  id,
}) => (
  <Container id={id} onClick={e => { e.stopPropagation(); clickItem(); }}>
    <StyledWrapper>
      <Span primary>{idItem}</Span>
      <Span primary>{name}</Span>
      <Span primary>{description}</Span>
    </StyledWrapper>
    <Kid onClick={e => { e.stopPropagation(); deleteItem(); }} id='kid'>
      <img src={trashIcon} alt={`Baz taking a ${name}`} />
    </Kid>
  </Container>
);

Item.propTypes = {
  clickItem: PropTypes.func,
  deleteItem: PropTypes.func,
  description: PropTypes.string,
  idItem: PropTypes.number,
  name: PropTypes.string,
};


export default Item;
