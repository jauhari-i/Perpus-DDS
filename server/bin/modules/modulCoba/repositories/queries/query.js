//const ObjectId = require("mongodb").ObjectId;

class Query {
  constructor(db) {
    this.db = db;
  }

  async getCoba(parameter) {
    const dataGet = await this.db.query(`Select * from anggota`);
    return dataGet;
  }

  async getCobaId(id_anggota) {
    const dataGetId = await this.db.query(
      `select * from anggota where id_anggota=` + id_anggota
    );
    //console.log(dataGetId);
    return dataGetId;
  }

  async postCoba(parameter) {
    const InsertGet = await this.db.query(`insert into anggota set ?`, [
      parameter.nm_anggota,
      parameter.alamat,
      parameter.tlpn,
      parameter.email_anggota,
      parameter.ps_anggota
    ]);
    //console.log(parameter);
    return InsertGet;
  }
}

module.exports = Query;
