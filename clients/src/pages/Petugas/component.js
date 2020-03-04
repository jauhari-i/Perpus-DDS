import React, { Component } from "react";
import { _GetPetugasById } from "../../function/petugasFunction";

export default class component extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petugas: {}
    };
  }

  componentDidMount() {
    const petugas = _GetPetugasById(this.props.match.params.id);
    this.setState({ petugas: petugas.data });
  }

  render() {
    return <div>{this.props.location.pathname}</div>;
  }
}
