import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './reactStuttgartLogo.jpg';

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.div`
  background-color: #222;
  height: 200px;
  padding: 20px;
  color: white;
`;

const AppIntro = styled.p`
  font-size: large;
`;

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <Logo src={logo} alt="logo" />
          <h2>Welcome to ReactStuttgart</h2>
        </AppHeader>
        <AppIntro>
          6. Meetup - React Stuttgart @ ITM
        </AppIntro>
        <AppIntro>
          Freitag, 24. März 2017 - 18:30
        </AppIntro>
      </AppWrapper>
    );
  }
}

export default App;
