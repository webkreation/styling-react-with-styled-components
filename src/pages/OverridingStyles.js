import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const UppercaseButton = styled(Button)`
  text-transform: uppercase;
`

class PassedProps extends Component {
  render() {
    return (
      <div>
        <h2>Overriding Styles</h2>
        <p>
          <Button>Normal</Button>
          <UppercaseButton>Uppercase</UppercaseButton>
        </p>
      </div>
    );
  }
}

export default PassedProps;
