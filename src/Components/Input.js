import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Span } from './Text';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = ({ input: { value, onChange }, name, labelInput, id, type }) => (
  <InputWrapper>
    <Span fontSize='24px' htmlFor={name}>{labelInput}</Span>
    <StyledInput id={`input-${id}`} type={type} value={value} onChange={onChange} />
  </InputWrapper>
);

const StyledInput = styled.input.attrs(props => {
  return {
    type: 'text',
    name: props.name,
    id: props.id,
    value: props.value,
    placeholder: props.placeholder,
    width: props.width,
    onChange: props.onChange,
  };
})`
  border: none;
  height: 40px;
  border-radius: 5px;
  font-size: 20px;
  padding: 0 10px;
  border: 2px solid #7db7b7;
  transition: border 0.3s;
  width: ${props => props.width || 500}px;
`;

Input.propTypes = {
  id: PropTypes.string,
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string,
  }),
  labelInput: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
