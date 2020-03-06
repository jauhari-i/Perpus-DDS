
const Query = require('./query');
const queryModel = require('./query_model');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Halo {

  constructor(db){
    this.query = new Query(db);
  }


  async viewHalo() {
    const user = await this.query.getCoba();
    if (user.err) {
      return wrapper.error(new NotFoundError('Can not find list project'));
    }
    console.log(user)
    return wrapper.data(user)
  }

}

module.exports = Halo;
