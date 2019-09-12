import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Span } from './Text';

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextArea = ({ input: { value, onChange }, name, labelInput, id }) => (
  <TextAreaWrapper>
    <Span fontSize='24px' htmlFor={name}>{labelInput}</Span>
    <StyledTextArea id={`text-area-${id}`} value={value} onChange={onChange} />
  </TextAreaWrapper>
);

const StyledTextArea = styled.textarea.attrs(props => {
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
  height: 200px;
  border-radius: 5px;
  border: 2px solid #7db7b7;
  resize: none;
  font-size: 20px;
  padding: 5px 10px;
  transition: border 0.3s;
  width: ${props => props.width || 500}px;
`;


TextArea.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string,
  }),
  labelInput: PropTypes.string,
  name: PropTypes.string,
};


export default TextArea;
