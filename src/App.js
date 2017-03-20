import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import ThirdParty from './pages/ThirdParty'
import PassedProps from './pages/PassedProps'
import AdaptingProps from './pages/AdaptingProps'
import OverridingStyles from './pages/OverridingStyles'
import HoverState from './pages/HoverState'
import logo from './reactStuttgartLogo.jpg'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppHeader = styled.div`
  flex: 1;
  background-color: #222;
  height: 200px;
  padding: 20px;
  color: white;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  height: 80px;
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <AppHeader>
            <Logo src={logo} alt="logo" />
            <h2>Welcome to ReactStuttgart</h2>
          </AppHeader>
          <ContentWrapper>
            <Route exact path="/" component={ThirdParty}/>
            <Route path="/thirdparty" component={ThirdParty}/>
            <Route path="/passedprops" component={PassedProps}/>
            <Route path="/adaptingprops" component={AdaptingProps}/>
            <Route path="/overridingstyles" component={OverridingStyles}/>
            <Route path="/hoverstate" component={HoverState}/>
          </ContentWrapper>  
        </AppWrapper>
      </Router>
    );
  }
}

export default App
