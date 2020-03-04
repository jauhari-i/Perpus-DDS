import React, { Component } from "react";
import {
  _GetPetugasAll,
  _AddPetugas,
  _EditPetugas,
  _DeletePetugas
} from "../../function/petugasFunction";

export default class component extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petugas: []
    };
  }

  componentDidMount() {
    // Untuk function _GetPetugasAll()
  }

  onClickFunction() {
    // Untuk function _AddPetugas()
    const data = {
      kd_petugas: "P04",
      nm_petugas: "Aufak",
      jabatan: "Bos",
      tlpn_petugas: "081237492813"
    };
    let post = _AddPetugas(data);
    this.setState({ petugas: post.data });
  }

  onClickFunctionDelete(id) {
    // Untuk function _DeletePetugas()
  }

  onClickFunctionEdit(id) {
    // Untuk function _EditPetugas()
  }

  render() {
    return (
      <section>
        <button onClick={() => this.onClickFunction()}>Add</button>
        <table>
          <tr>
            <th>Kode Petugas</th>
            <th>Nama Petugas</th>
            <th>Jabatan</th>
            <th>No. Telepon</th>
            <th>Opsi</th>
          </tr>
          {this.state.petugas.map((item, id) => (
            <tr key={id}>
              <td>{item.kd_petugas}</td>
              <td>{item.nama_petugas}</td>
              <td>{item.jabatan}</td>
              <td>{item.tlpn_petugas}</td>
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
