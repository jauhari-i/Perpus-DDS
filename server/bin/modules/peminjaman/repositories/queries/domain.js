
const Query = require('./query');
const queryModel = require('./query_model');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Project {

  constructor(db){
    this.query = new Query(db);
  }

  //GET PEMINJAMAN
  async ViewPeminjamanList() {
    const pinjam = await this.query.getPeminjaman();
    if (pinjam.err) {
      return wrapper.error(new NotFoundError('Can not find list pinjam'));
    }
    console.log(pinjam)
    return wrapper.data(pinjam);
  }

}

module.exports = Project;
