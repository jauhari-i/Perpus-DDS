
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

    // const result = [];
    // user.data.map(i => {
    //   const listProject = queryModel.project();
    //   listProject.projectId = i.id;
    //   listProject.projectName = i.nameProject;
    //   result.push(listProject);
    // });

    console.log(user)
    return wrapper.data(user)

    // let result = "Hallo Word"+ id

    // return wrapper.data(result);
  }

}

module.exports = Halo;
