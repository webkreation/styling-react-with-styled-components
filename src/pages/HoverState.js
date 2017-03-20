import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: white;
  color: red;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.correct ? 'green' : 'red'};
  }
`;

class PassedProps extends Component {

  render() {
    return (
      <div>
        <h2>Hover</h2>
        <input type="checkbox"/>
        <label>Bestätigung AGB</label>
        <p>
          <Button>Normal</Button>
        </p>
      </div>
    );
  }
}

export default PassedProps;
