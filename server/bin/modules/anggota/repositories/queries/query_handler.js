
const Halo = require('./domain');
const Sql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');
const db = new Sql(config.get('/sqlDbUrl'));
const gets = new Halo(db);

const getUser = async (userId) => {
  const getData = async () => {
    const result = await gets.lihatAnggota(userId);
    return result;
  };
  const result = await getData();
  return result;
};

module.exports = {
  getUser
};
