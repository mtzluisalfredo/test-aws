import styled from 'styled-components';
import is from 'styled-is';

const Paragraph = styled.p`
  font-size: 16px;
  margin: 0;
`;

const Span = styled.span`
  font-size: 16px;
  margin: 0;
  ${is('fontSize')`
    font-size: ${props => props.fontSize};
  `};
  ${is('primary')`
    color: #6d6767;
  `};
`;

const Title1 = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

const Title2 = styled.h2`
  font-size: 1.25em;
  margin: 0;
`;

const Title3 = styled.h3`
  font-size: 1.125em;
  margin: 0;
`;

const Title4 = styled.h4`
  font-size: 1em;
  margin: 0;
`;

const Title5 = styled.h5`
  font-size: 0.875em;
  margin: 0;
`;

const Title6 = styled.h6`
  font-size: 0.75em;
  margin: 0;
`;

export { Paragraph, Span, Title1, Title2, Title3, Title4, Title5, Title6 };
