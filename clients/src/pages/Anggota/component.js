import React, { Component } from "react";
import { _GetAnggotaById } from "../../function/anggotaFunction";
export default class component extends Component {
  render() {
    return <div>{this.props.location.pathname}</div>;
  }
}
