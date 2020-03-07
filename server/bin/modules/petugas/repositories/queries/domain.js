
const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Petugas {

  constructor(db){
    this.query = new Query(db);
  }

  async getPetugas() {
    const user = await this.query.getPetugas();
    if (user.err) {
      return wrapper.error(new NotFoundError('Can not find list Petugas'));
    }
    return wrapper.data(user)
  }

  async getPetugasId(userId) {
    const user = await this.query.getPetugasId(userId);
    if (user.err) {
      return wrapper.error(new NotFoundError('Can not find list Petugas'));
    }
    return wrapper.data(user)
  }

  async addPetugas(data) {
    const user = await this.query.postPetugas(data);
    if (user.err) {
      return wrapper.error(new NotFoundError('Can not find list Petugas'));
    }
    return wrapper.data(user)
  }

  async deletePetugas(userId) {
    const user = await this.query.deletePetugas(userId);
    if (user.err) {
      return wrapper.error(new NotFoundError('Can not add to list Petugas'));
    }
    return wrapper.data(user)
  }

  async updatePetugas(data) {
    const user = await this.query.updatePetugas(data);
    if (user.err) {
      return wrapper.error(new NotFoundError('Can not update list Petugas'));
    }
    return wrapper.data(user)
  }
}

module.exports = Petugas;
