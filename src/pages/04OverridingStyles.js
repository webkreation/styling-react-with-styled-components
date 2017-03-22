import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const UppercaseButton = styled(Button)`
  text-transform: uppercase;
  border: 10px solid green;
  border-radius: initial;
`

class PassedProps extends Component {
  render() {
    return (
      <div>
        <h2>Overriding Component Styles</h2>
        <p>
          <Button>Button</Button>
          <UppercaseButton>Button</UppercaseButton>
        </p>
        <p>
          <Link to="/05">next</Link>
        </p>
      </div>
    );
  }
}

export default PassedProps;
