import React, { Component } from "react";
import { _GetAnggotaAll } from "../../function/anggotaFunction";
export default class component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anggota: []
    };
  }

  componentDidMount() {
    console.log(_GetAnggotaAll());
    this.setState({
      anggota: _GetAnggotaAll().data
    });
  }

  render() {
    return <div>{this.props.location.pathname}</div>;
  }
}
