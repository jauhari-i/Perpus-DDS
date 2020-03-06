
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
    const project = await this.query.findMany();
    if (project.err) {
      return wrapper.error(new NotFoundError('Can not find list project'));
    }

    const result = [];
    project.data.map(i => {
      const listProject = queryModel.project();
      listProject.projectId = i.id;
      listProject.projectName = i.nameProject;
      result.push(listProject);
    });

    return wrapper.data(result);
  }

}

module.exports = Project;
