const Halo = require("./domain");
const MySql = require("../../../../helpers/databases/mysql/db");
const config = require("../../../../infra/configs/global_config");
const db = new MySql(config.get("/mysqlConfig"));
const halo = new Halo(db);

const getHelloword = async () => {
  const getData = async () => {
    const result = await halo.viewHalo();
    return result;
  };
  const result = await getData();
  return result;
};

const getHellowordId = async id_anggota => {
  const getDataId = async () => {
    const result = await halo.viewHaloId(id_anggota);
    return result;
  };
  const result = await getDataId();
  return result;
};

const insertHelloword = async parameter => {
  const insertData = async () => {
    const result = await halo.insertHalo(parameter);
    return result;
  };
  const result = await insertData();
  return result;
};

module.exports = {
  getHelloword,
  getHellowordId,
  insertHelloword
};
