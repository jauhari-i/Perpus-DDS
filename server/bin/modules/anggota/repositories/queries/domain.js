
const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Anggota {

  constructor(db){
    this.query = new Query(db);
  }

  async lihatAnggota() {
    const dbOutput = await this.query.getAnggota();
    
    if (dbOutput.err) {
      return wrapper.error(new NotFoundError('Data tidak ada wow'));
    }

    return wrapper.data(dbOutput);
  }

}

module.exports = Anggota;
