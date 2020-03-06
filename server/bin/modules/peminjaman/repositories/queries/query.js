
const ObjectId = require('mongodb').ObjectId;

class Query {

  constructor(db) {
    this.db = db;
  }

  async getCoba(parameter){
    const recordset = await this.db.query(`Select * from anggota`)
    return recordset
  }

  async findOneUser(parameter) {
    this.db.setCollection('project');
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }

  async findById(id) {
    this.db.setCollection('project');
    const parameter = {
      _id: ObjectId(id)
    };
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }

  async findMany(parameter) {
    this.db.setCollection('coba');
    const recordset = await this.db.findMany(parameter);
    return recordset;
  }

}

module.exports = Query;
