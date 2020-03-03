
const ObjectId = require('mongodb').ObjectId;

class Query {

  constructor(db) {
    this.db = db;
  }

  async findOneUser(parameter) {
    this.db.setCollection('user');
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }

  async findById(id) {
    this.db.setCollection('user');
    const parameter = {
      _id: ObjectId(id)
    };
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }

}

module.exports = Query;
