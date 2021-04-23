import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
// import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
import { InputBase } from "@material-ui/core";
import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/LangContext";

const emojis = {
  french: {
    emoji: "🇹🇫",
  },
  spanish: {
    emoji: "🇪🇸",
  },
  english: {
    emoji: "🇺🇸",
  },
};

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { classes } = this.props;
    const { language } = this.props.languageContext;
    const { emoji } = emojis[language];
    console.log(emoji);
    console.log(language);
    const { isDarkMode, changeDarkMode } = this.context;
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} colors="inherit">
              <span>{emoji}</span>
            </IconButton>
            <Typography
              className={classes.title}
              variant="h6"
              colors="inherit"
            ></Typography>
            <Switch onClick={changeDarkMode} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
