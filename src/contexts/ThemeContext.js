import React, { Component } from "react";

export const ThemeContext = React.createContext("light");

export class ThemeProvider extends Component {
  state = {
    isDarkMode: false,
  };

  changeDarkMode = () => {
    this.setState({
      isDarkMode: !this.state.isDarkMode,
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, changeDarkMode: this.changeDarkMode }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
