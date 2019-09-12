import React from 'react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import Content from './Container';

Amplify.configure(aws_exports);

export default function App() {
  return (
    <div className='container'>
      <Content />
    </div>
  );
}
