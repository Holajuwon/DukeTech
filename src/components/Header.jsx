import React, { Fragment } from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

const Header = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <AppBar color="secondary" position="sticky" style={{ height: 70 }}>
      <Toolbar style={{ height: 70 }}>
        <Typography
          color="textPrimary"
          style={{ fontSize: 25 }}
          className={classes.flex}
        >
          St. Duke Hotels
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
));

export default Header;
