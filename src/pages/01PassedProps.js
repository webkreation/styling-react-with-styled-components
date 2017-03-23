import React, { Component } from 'react';
import styled from 'styled-components';
import H2 from '../components/H2'
import Next from '../components/Next'

const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  color: palevioletred;
  background: gray;
  border: none;
  border-radius: 3px;
`;

class PassedProps extends Component {
  render() {
    return (
      <div>
        <H2>Passed Props</H2>
        <p>Styled components pass on all their props.</p>
        <p>
          <Input placeholder="Type in Text" size="20" type="text" /> 
        </p>
        <Next nextPage="/02"/>
      </div>
    );
  }
}

export default PassedProps;
