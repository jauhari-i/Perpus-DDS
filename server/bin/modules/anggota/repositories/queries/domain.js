const Query = require('./query');
const queryModel = require('./query_model')
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Anggota {

  constructor(db){
    this.query = new Query(db);
  }

  async viewAnggota() {
    const anggota = await this.query.getData();
    if (anggota.err) {
      return wrapper.error(new NotFoundError('Data tidak ada wow'));
    }

    const output = [];
    anggota.data.map(i => {
      const anggotaNya = queryModel.project();
      anggotaNya.kd_anggota = i.kd_anggota;
      anggotaNya.nm_anggota = i.nm_anggota;
      output.push(anggotaNya);
    });

    return console.log(output)
  }

}

module.exports = Anggota;