
const ObjectId = require('mongodb').ObjectId;

class Query {

  constructor(db) {
    this.db = db;
  }

  async getPeminjaman(){
    const recordset = await this.db.query(`Select * from anggota`)
    return recordset
  }

}

module.exports = Query;
