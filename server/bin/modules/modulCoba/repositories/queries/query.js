//const ObjectId = require("mongodb").ObjectId;

class Query {
  constructor(db) {
    this.db = db;
  }

  async getCoba(parameter) {
    const data = await this.db.query(`Select * from anggota`);
    return data;
  }

  async getCobaId(parameter) {
    const data = await this.db.query( 
      `select * from anggota where kd_anggota=` + parameter
    );
    //console.log(dataGetId);
    return data;
  }

  async postCoba(parameter) {
    const data = await this.db.query(`INSERT INTO anggota (nm_anggota, alamat, tlpn, email_anggota, ps_anggota) 
            VALUES ('`+parameter.nm_anggota+`','`+parameter.alamat+`' , '`+parameter.tlpn+`', '`+parameter.email_anggota+`', '`+parameter.ps_anggota+`');`);
    //console.log(parameter);
    return data;
  }
}

module.exports = Query;
