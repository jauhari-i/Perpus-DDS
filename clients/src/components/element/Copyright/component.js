import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default class component extends Component {
  render() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
          {this.props.children}
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
}
