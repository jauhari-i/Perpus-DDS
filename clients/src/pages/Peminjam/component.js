import React, { Component } from "react";
import { _GetPeminjamById } from "../../function/peminjamFunction";

export default class component extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      peminjam: {}
    };
  }

  componentDidMount() {
    const peminjam = _GetPeminjamById(this.props.match.params.id);
    this.setState({ peminjam: peminjam.data });
  }

  render() {
    return <div>{this.props.location.pathname}</div>;
  }
}
