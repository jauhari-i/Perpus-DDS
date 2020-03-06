const Halo = require("./domain");
const MySql = require("../../../../helpers/databases/mysql/db");
const config = require("../../../../infra/configs/global_config");
const db = new MySql(config.get("/mysqlConfig"));
const halo = new Halo(db);

const getHelloword = async () => {
  const Data = async () => {
    const result = await halo.viewHalo();
    return result;
  };
  const result = await Data();
  return result;
};

const getHellowordId = async id_anggota => {
  const Data = async () => {
    const result = await halo.viewHaloId(id_anggota);
    return result;
  };
  const result = await Data();
  return result;
};

const insertHelloword = async parameter => {
  const Data = async () => {
    const result = await halo.insertHalo(parameter);
    return result;
  };
  const result = await Data();
  return result;
};

module.exports = {
  getHelloword,
  getHellowordId,
  insertHelloword
};
