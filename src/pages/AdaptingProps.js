import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  font-size: ${props => props.bigger ? '2em' : '1em'};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class PassedProps extends Component {
  render() {
    return (
      <div>
        <h2>Adapting based on props</h2>
        <p>
          <Button>Normal</Button>
          <Button primary>Primary</Button>
          <Button primary bigger>Primary Bigger</Button>
        </p>
      </div>
    );
  }
}

export default PassedProps;
