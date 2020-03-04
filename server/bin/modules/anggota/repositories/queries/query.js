
const ObjectId = require('mongodb').ObjectId;

class Query {

  constructor(db) {
    this.db = db;
  }

  async findOneUser(parameter) {
    this.db.setCollection('dataku');
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }

  async findById(id) {
    this.db.setCollection('dataku');
    const parameter = {
      _id: ObjectId(id)
    };
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }

  async findMany(id) {
    this.db.setCollection('dataku');
    const recordset = await this.db.findMany(id);
    return recordset;
  }

}

module.exports = Query;
