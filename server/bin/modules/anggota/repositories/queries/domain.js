const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Anggota {

  constructor(db){
    this.query = new Query(db);
  }

  /**
   * @desc GET METHOD
   */
  
  async viewAnggota() {
    const anggota = await this.query.getData();
    if (anggota.err) {
      return wrapper.error(new NotFoundError('Data petugas tidak ada'));
    }
    return wrapper.data(anggota);
  }

}

module.exports = Anggota;