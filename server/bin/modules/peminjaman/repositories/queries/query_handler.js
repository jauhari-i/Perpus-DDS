
const Project = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));
const project = new Project(db);


// GET PEMINJAMAN
const getPeminjaman = async () => {
  const getData = async () => {
    const result = await project.ViewPeminjamanList();
    return result;
  };
  const result = await getData();
  return result;
};

module.exports = {
  getPeminjaman
};
