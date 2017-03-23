import React, { Component } from 'react'
import styled from 'styled-components'
import H2 from '../components/H2'
import Next from '../components/Next' 
import Button from '../components/Button'


const UppercaseButton = styled(Button)`
  text-transform: uppercase;
  border: 10px solid green;
`

const PassedProps = () => {
  return (
    <div>
      <H2>Overriding Component Styles</H2>
      <p>
        <Button>Button</Button>
        <UppercaseButton>Button Uppercase Border</UppercaseButton>
      </p>
      <Next nextPage="/05"/>
    </div>
  );
}

export default PassedProps;
