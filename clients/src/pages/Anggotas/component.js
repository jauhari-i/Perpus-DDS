import React, { Component } from "react";
import {
  _GetAnggotaAll,
  _AddAnggota,
  _EditAnggota,
  _DeleteAnggota
} from "../../function/anggotaFunction";
import Table from "../../components/element/Table";
import { tableColumn } from "../../constants/Table";

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

  onClickFunction() {
    const data = {
      kode_anggota: "AG0203",
      nama_anggota: "Backend",
      alamat: "Backend Mana?",
      telepon: "081237492813"
    };
    let post = _AddAnggota(data);
    this.setState({ anggota: post.data });
  }

  onClickFunctionDelete(id) {
    let deletes = _DeleteAnggota(id);
    this.setState({
      anggota: deletes.data
    });
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

  render() {
    return (
      <Table
        title="Anggota"
        columns={tableColumn.AnggotaColumn}
        data={this.state.anggota}
        add={this.onClickFunction}
        edit={this.onClickFunctionEdit}
        delete={this.onClickFunctionEdit}
      />
    );
  }
}
