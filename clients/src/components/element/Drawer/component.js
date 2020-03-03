import React, { Component } from "react";
import "./styles.module.css";

export default class component extends Component {
  render() {
    return (
      <main className="drawer">
        <section className="header">
          <h3 className="product-name">Perpustakaan DDS</h3>
        </section>

        <section className="menu-active">
          <img className="icon" src="" alt="icon" />
          <h4 className="menu-item-active">Peminjaman</h4>
        </section>
        <a href="/anggota" className="url">
          <section className="menu">
            <img className="icon" src="" alt="icon" />
            <h4 className="menu-item">Anggota</h4>
          </section>
        </a>
        <a href="/petugas" className="url">
          <section className="menu">
            <img className="icon" src="" alt="icon" />
            <h4 className="menu-item">Petugas</h4>
          </section>
        </a>
      </main>
    );
  }
}
