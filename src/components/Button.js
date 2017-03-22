import styled from 'styled-components';

const Button = styled.button`
  display: block;
  background: ${props => props.delete ? 'red' : 'white'};
  color: ${props => props.delete ? 'white' : 'black'};
  font-size: ${props => props.bigger ? '2em' : '1em'};
  margin: 1em 0;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

export default Button;