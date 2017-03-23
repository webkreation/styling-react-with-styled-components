import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import H2 from "../components/H2";
import Next from "../components/Next";
import { Link } from "react-router-dom";

const theme = {
  theme1: {
    mainColor: "gold",
    background: "gray"
  },
  theme2: {
    mainColor: "red",
    background: "black"
  }
};

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
`;

const Circle = styled.div`
  display: inline-block;
  background: ${props => props.theme.mainColor};
  border-radius: 50%;
	width: 20px;
	height: 20px; 
  margin-right: 10px;
`;

class Theming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "theme1"
    };
    this.handleThemeClick = this.handleThemeClick.bind(this);
  }

  handleThemeClick() {
    this.setState({
      theme: "theme2"
    });
  }

  render() {
    const { state } = this.props;

    return (
      <div>
        <H2>Theming</H2>
        <ThemeProvider theme={theme[this.state.theme]}>
          <div>
            <Button>
              <Circle />
              Button
            </Button>
            <Button onClick={this.handleThemeClick}>
              Toggle Theme
            </Button>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default Theming;
