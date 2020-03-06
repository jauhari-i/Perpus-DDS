const wrapper = require('../../../../helpers/utils/wrapper');
class Query {

  constructor(db){
    this.db = db;
  }

  async getData() {

    const record = await this.db.query('SELECT * from anggota')
    return record, wrapper.data(record);
  }
}

module.exports = Query;