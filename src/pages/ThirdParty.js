import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  background-color: red;
  color: white;
`;

class ThirdPartyComponents extends Component {
  render() {
    return (
      <div>
        <h2>Third-party components</h2>
        <p>
          <Link to="/">Standard, unstyled Link</Link> 
        </p>
        <p>
          <StyledLink to="/">This Link is styled!</StyledLink>
        </p>
      </div>
    );
  }
}

export default ThirdPartyComponents;
