import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import PassedProps from './pages/01PassedProps'
import AdaptingProps from './pages/02AdaptingProps'
import HoverState from './pages/03HoverState'
import OverridingStyles from './pages/04OverridingStyles'
import ThirdParty from './pages/05ThirdParty'
import Theming from './pages/06Theming'
import Theming2 from './pages/07Theming2'


import logo from './reactStuttgartLogo.jpg'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppHeader = styled.div`
  flex: 1;
  background-color: #2f3141;
  padding: 10px;
  color: white;

  display: flex;
  justify-content: center;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const DemoBox = styled.div`
  flex: 0 1 50%;
`

const AppIntro = styled.p`
  font-size: large;
`

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 40px;
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <AppHeader>
            <Logo src={logo} alt="logo" />
          </AppHeader>
          <ContentWrapper>
            <Route exact path="/" component={PassedProps}/>
            <Route path="/02" component={AdaptingProps}/>
            <Route path="/03" component={HoverState}/>
            <Route path="/04" component={OverridingStyles}/>
            <Route path="/05" component={ThirdParty}/>
            <Route path="/06" component={Theming}/>
            <Route path="/07" component={Theming2}/>
          </ContentWrapper>  
        </AppWrapper>
      </Router>
    );
  }
}

export default App
