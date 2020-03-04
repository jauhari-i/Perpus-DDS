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
  constructor(props) {
    super(props);

    this.state = {
      anggota: []
    };
  }

  componentDidMount() {
    this.setState({
      anggota: _GetAnggotaAll().data
    });
  }

  onClickFunctionAdd() {
    const data = {
      kode_anggota: "AG0203",
      nama_anggota: "Backend",
      alamat: "Backend Mana?",
      telepon: "081237492813"
    };
    let post = _AddAnggota(data);
    this.setState({ anggota: post.data });
  }

  onClickFunctionEdit(id) {
    const data = {
      kode_anggota: "AG0203",
      nama_anggota: "Backend",
      alamat: "Backend Mana?",
      telepon: "081237492813"
    };
    let put = _EditAnggota({ id, data });
    this.setState({
      anggota: put.data
    });
  }

  onClickFunctionDelete(oldData) {
    const deletes = _DeleteAnggota(oldData);
    return deletes.data;
  }

  render() {
    return (
      <Table
        title="Anggota"
        columns={tableColumn.AnggotaColumn}
        data={anggota}
        deletes={this.onClickFunctionDelete}
      />
    );
  }
}
