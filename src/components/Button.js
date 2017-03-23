import styled from 'styled-components'

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
  cursor: pointer;

  &:hover {
    background-color: #FFCE38;
  }

  @media (min-width: 1024px) {
    padding: 1em 3em;
  }
`

export default Button;