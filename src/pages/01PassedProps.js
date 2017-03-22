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
        <p>Styled components pass on all their props.</p>
        <p>
          <Input placeholder="Type in Text" size="20" type="text" /> 
        </p>
        <p>
          <Link to="/02">next</Link>
        </p>
      </div>
    );
  }
}

export default PassedProps;
