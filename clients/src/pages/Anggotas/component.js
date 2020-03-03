import React, { Component } from "react";
import {
  _GetAnggotaAll,
  _AddAnggota,
  _DeleteAnggota,
  _EditAnggota
} from "../../function/anggotaFunction";
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

  onClickFunctionDelete(i) {
    let deletes = _DeleteAnggota(i);
    this.setState({
      anggota: deletes.data
    });
  }

  onClickFunctionEdit(i) {
    const data = {
      kode_anggota: "AG0203",
      nama_anggota: "Backend",
      alamat: "Backend Mana?",
      telepon: "081237492813"
    };
    let put = _EditAnggota({ i, data });
    this.setState({
      anggota: put.data
    });
  }

  render() {
    return (
      <div>
        <button onClick={e => this.onClickFunction()}>Add</button>
        <table>
          <tr>
            <th>Kode</th>
            <th>Nama</th>
            <th>Kode</th>
            <th>Kode</th>
            <th>Opsi</th>
          </tr>
          {this.state.anggota.map((item, i) => (
            <tr key={i}>
              <td>{item.kode_anggota}</td>
              <td>{item.nama_anggota}</td>
              <td>{item.alamat}</td>
              <td>{item.telepon}</td>
              <td>
                <button onClick={e => this.onClickFunctionDelete(i)}>
                  Delete
                </button>
                <button onClick={e => this.onClickFunctionEdit(i)}>Edit</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
