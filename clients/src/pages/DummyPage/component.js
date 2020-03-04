import React, { Component } from "react";
import Table from "../../components/element/Table";
import { tableColumn } from "../../constants/Table";
import { anggota } from "../../function/anggotaFunction";

export class component extends Component {
  render() {
    return (
      <Table
        title="Anggota"
        columns={tableColumn.AnggotaColumn}
        data={anggota}
      />
    );
  }
}

export default component;
