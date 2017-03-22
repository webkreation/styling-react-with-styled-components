import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: white;
  color: red;
  margin: 1em 0;
  padding: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.correct ? 'green' : 'green'};
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
        <p>
          <Link to="/04">next</Link>
        </p>
      </div>
    );
  }
}

export default PassedProps;
