class Query {

  constructor(db) {
    this.db = db;
  }

  async getPetugas(parameter){
    const recordset = await this.db.query(`SELECT * FROM petugas`)
    return recordset
  }

  async postPetugas(data){
    const recordset = await this.db.query(
    `INSERT INTO petugas (nm_petugas,jabatan,tlpn_petugas,email_petugas,ps_petugas) 
    VALUES (''',`+data.nama+`','`+data.jabatan+`','`+data.telp+`','`+data.email+`','`+data.pass+`')`)
    console.log(recordset);
    
    return recordset
  }

  async deletePetugas(userId){
    const recordset = await this.db.query(`DELETE FROM petugas WHERE kd_petugas = `+"'"+userId+"'")
    console.log(recordset);
    
    return recordset
  }
  async updatePetugas(data){
    console.log(data);
    
    const recordset = await this.db.query(
      `UPDATE petugas SET 
      nm_petugas='`+data.nama+`', 
      jabatan='`+data.jabatan+`',
      tlpn_petugas='`+data.telp+`',
      email_petugas='`+data.email+`',
      ps_petugas='`+data.pass+`' WHERE kd_petugas='`+data.kd+`'`
    )
    console.log(recordset);
    
    return recordset
  }
}

module.exports = Query;
