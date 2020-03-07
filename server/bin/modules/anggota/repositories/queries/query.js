class Query {

  constructor(db){
    this.db = db;
  }

  async getData() {

    const record = await this.db.query('SELECT * from anggota');
    return record;
  }
}

module.exports = Query;