import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import H2 from '../components/H2'
import Next from '../components/Next' 
import { Link } from 'react-router-dom';

const theme = {
  theme1: {
    mainColor: 'gold',
    background: 'gray'
  },
  theme2: {
    mainColor: 'red',
    background: 'black'
  }
}

const Button = styled.button`
  display: block;
  background: ${props => props.theme.background};
  color: ${props => props.theme.mainColor};
  border: none;
  border-radius: 0.25em;
  font-size: 2em;
  padding: 0.5em 1em;
  margin: 1em 0;
  cursor: pointer;
`

const Circle = styled.div`
  display: inline-block;
  background: ${props => props.theme.mainColor};
  border-radius: 50%;
	width: 20px;
	height: 20px; 
  margin-right: 10px;
`

const Theming = () => {
  return (
    <div>
      <H2>Theming</H2>
      <ThemeProvider theme={theme.theme1}>
        <Button>
          <Circle/>
          Button
        </Button>
      </ThemeProvider>
      <ThemeProvider theme={theme.theme2}>
        <Button className="test">
          <Circle/>
          Button
        </Button>
      </ThemeProvider>
      <Next nextPage="/07"/>
    </div>
  );
}

export default Theming;
