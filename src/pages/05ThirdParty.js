import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  background-color: red;
  color: white;
  padding: 10px;
`;

class ThirdPartyComponents extends Component {
  render() {
    return (
      <div>
        <h2>Third-party components</h2>
        <p>
          <Link to="/">Standard, unstyled Link from React-Router</Link> 
        </p>
        <p>
          <StyledLink to="/02">Style Third-party component</StyledLink>
        </p>
        <p>
          <Link to="/06">next</Link>
        </p>
      </div>
    );
  }
}

export default ThirdPartyComponents;
