import React from 'react'
import styled from 'styled-components'
import H2 from '../components/H2'
import Next from '../components/Next' 
import Button from '../components/Button'
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: block;
  background-color: red;
  color: white;
  padding: 10px;
  text-align: center;
  margin: 1em 0;
  text-decoration: none;
`;

const ThirdPartyComponents = () => {
  return (
    <div>
      <H2>Third-party components</H2>
      <p>
        <Link to="/">Standard, unstyled Link from React-Router</Link> 
      </p>
      <p>
        <StyledLink to="/02">Style React-Router Link</StyledLink>
      </p>
      <Next nextPage="/06"/>
    </div>
  );
}

export default ThirdPartyComponents;
