import React, { Component } from "react";
import {
  _GetAnggotaAll,
  _AddAnggota,
  _EditAnggota,
  _DeleteAnggota
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
      <section>
        <button onClick={() => this.onClickFunction()}>Add</button>
        <table>
          <tr>
            <th>Kode</th>
            <th>Nama</th>
            <th>Kode</th>
            <th>Kode</th>
            <th>Opsi</th>
          </tr>
          {this.state.anggota.map((item, id) => (
            <tr key={id}>
              <td>{item.kode_anggota}</td>
              <td>{item.nama_anggota}</td>
              <td>{item.alamat}</td>
              <td>{item.telepon}</td>
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
