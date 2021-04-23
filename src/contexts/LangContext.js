import React, { Component } from "react";

export const LangContext = React.createContext();

export class LangProvider extends Component {
  state = {
    language: "spanish",
  };

  changeLanguage = (e) => {
    this.setState({
      language: e.target.value,
    });
  };

  render() {
    return (
      <LangContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LangContext.Provider>
    );
  }
}
