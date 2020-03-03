import React, { Component } from "react";

export default class component extends Component {
    render() {
        return <div>{this.props.location.pathname}</div>;
    }
}
