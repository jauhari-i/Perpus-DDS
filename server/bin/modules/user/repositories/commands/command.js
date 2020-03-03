
class Command {

  constructor(db) {
    this.db = db;
  }

  async insertOneUser(document){
    this.db.setCollection('user');
    const result = await this.db.insertOne(document);
    return result;
  }
}

module.exports = Command;
