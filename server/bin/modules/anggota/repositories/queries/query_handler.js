
const Anggota = require('./domain');
const Sql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');
const db = new Sql(config.get('/mysqlConfig'));
const anggota = new Anggota(db);

const getAnggota1 = async () => {
  const getData = async () => {
    const result = await anggota.viewAnggota();
    return result;
  };
  const result = await getData();
  return result;
};

module.exports = getAnggota1;
