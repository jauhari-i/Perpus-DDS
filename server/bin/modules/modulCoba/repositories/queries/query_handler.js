
const Halo = require('./domain');
const MySql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');
const db = new MySql(config.get('/mysqlConfig'));
const halo = new Halo(db);

const getProjectList = async () => {
  const getData = async () => {
    const result = await halo.viewProjectList();
    return result;
  };
  const result = await getData();
  return result;
};

const getHelloword = async () => {
  const getData = async () => {
    const result = await halo.viewHalo();
    return result;
  };
  const result = await getData();
  return result;
};


module.exports = {
  getProjectList,
  getHelloword
};
