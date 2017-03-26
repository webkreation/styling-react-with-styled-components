import React from 'react'
import styled from 'styled-components'
import H2 from '../components/H2'
import Next from '../components/Next' 


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  display: block;
  background: ${props => props.action ? 'green' : '#00D8FF'};
  color: ${props => props.action ? 'white' : 'black'};
  border: none;
  border-radius: 0.25em;
  font-size: ${props => props.bigger ? '2em' : '1em'};
  padding: 0.5em 1em;
  margin: 1em 0;
`;

const PassedProps = () => {
    return (
      <div>
        <H2>Adapting based on props</H2>
        <p>
          <Button>Normal</Button>
          <Button action>Buy now</Button>
          <Button action bigger>Buy now bigger</Button>
        </p>
        <Next nextPage="/03"/>
      </div>
    );
}

export default PassedProps;
