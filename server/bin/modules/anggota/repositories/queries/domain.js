
const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Anggota {

  constructor(db){
    this.query = new Query(db);
  }

  async lihatAnggota(userId) {
    const dbOutput = await this.query.findMany({});
    
    if (dbOutput.err) {
      return wrapper.error(new NotFoundError('Data tidak ada wow'));
    }

    return wrapper.data(dbOutput);
  }

}

module.exports = Anggota;
