import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Login from "../../components/forms/Login";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Copyright from "../../components/element/Copyright";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main
  }
});

class component extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Login type="Login" history={this.props.history} />
        </div>
        <Box mt={8}>
          <Copyright>Tefa DDS</Copyright>
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(component);
