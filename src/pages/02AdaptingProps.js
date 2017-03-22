import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  display: block;
  background: ${props => props.delete ? 'red' : 'white'};
  color: ${props => props.delete ? 'white' : 'black'};
  font-size: ${props => props.bigger ? '2em' : '1em'};
  margin: 1em 0;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

class PassedProps extends Component {
  render() {
    return (
      <div>
        <h2>Adapting based on props</h2>
        <p>
          <Button>Normal</Button>
          <Button delete>Delete Content</Button>
          <Button delete bigger>Delete Bigger Content</Button>
        </p>
        <p>
          <Link to="/03">next</Link>
        </p>
      </div>
    );
  }
}

export default PassedProps;
