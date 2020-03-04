import React, { Component } from "react";
import {
  _GetPeminjamAll,
  _AddPeminjam,
  _EditPeminjam,
  _DeletePeminjam
} from "../../function/peminjamFunction";

export default class component extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peminjam: []
    };
  }

  componentDidMount() {
    // Untuk function _GetPeminjamAll()
  }

  onClickFunction() {
    // Untuk function _AddPeminjam()
    const data = {
      no_pinjam: "4",
      nama_anggota: "Aufakkkk",
      nama_petugas: "Lord Aufa",
      tgl_pinjam: "17/01/2020"
    };
    let post = _AddAnggota(data);
    this.setState({ anggota: post.data });
  }

  onClickFunctionDelete(id) {
    // Untuk function _DeletePeminjam()
  }

  onClickFunctionEdit(id) {
    // Untuk function _EditPeminjam()
  }

  render() {
    return (
      <section>
        <button onClick={() => this.onClickFunction()}>Add</button>
        <table>
          <tr>
            <th>No. Pinjam</th>
            <th>Nama Anggota</th>
            <th>Nama Petugas</th>
            <th>Tanggal Pinjam</th>
            <th>Opsi</th>
          </tr>
          {this.state.peminjam.map((item, id) => (
            <tr key={id}>
              <td>{item.no_pinjam}</td>
              <td>{item.nama_anggota}</td>
              <td>{item.nama_petugas}</td>
              <td>{item.tgl_pinjam}</td>
              <td>
                <button onClick={() => this.onClickFunctionDelete(id)}>
                  Delete
                </button>
                <button onClick={() => this.onClickFunctionEdit(id)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </table>
      </section>
    );
  }
}
