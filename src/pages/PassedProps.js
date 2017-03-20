import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        <h2>Passed Props</h2>
        <p>
          <Input placeholder="passedProps" type="text" /> 
        </p>
      </div>
    );
  }
}

export default PassedProps;
