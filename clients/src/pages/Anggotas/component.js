import React, { Component } from "react";
import {
  _GetAnggotaAll,
  _AddAnggota,
  _EditAnggota,
  _DeleteAnggota
} from "../../function/anggotaFunction";
import Table from "../../components/element/Table";
import { tableColumn } from "../../constants/Table";
import { anggota } from "../../function/anggotaFunction";
import { tableFunction } from "../../function/tableFunction";

export default class component extends Component {
  onClickFunctionAdd(newData) {
    const added = _AddAnggota(newData);
    return added.data;
  }

  onClickFunctionEdit(newData, oldData) {
    const updated = _EditAnggota(newData, oldData);
    return updated.data;
  }

  onClickFunctionDelete(oldData) {
    const deletes = _DeleteAnggota(oldData);
    return deletes.data;
  }

  render() {
    const dataAll = _GetAnggotaAll().data;
    return (
      <Table
        title="Anggota"
        columns={tableColumn.AnggotaColumn}
        data={dataAll}
        add={this.onClickFunctionAdd}
        deletes={this.onClickFunctionDelete}
        edit={this.onClickFunctionEdit}
      />
    );
  }
}
