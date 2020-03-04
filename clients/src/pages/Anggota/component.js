import React, { Component } from "react";
import { _GetAnggotaById } from "../../function/anggotaFunction";

export default class component extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anggota: {}
    };
  }

  componentDidMount() {
    const anggota = _GetAnggotaById(this.props.match.params.id);
    this.setState({ anggota: anggota.data });
  }

  render() {
    return <div>{this.props.location.pathname}</div>;
  }
}
