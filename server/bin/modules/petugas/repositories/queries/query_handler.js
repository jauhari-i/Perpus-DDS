
const Petugas = require('./domain');
const MySql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');
const db = new MySql(config.get('/mysqlConfig'));
const petugas = new Petugas(db);

const getData = async () => {
  const getData = async () => {
    const result = await petugas.getPetugas();
    return result;
  };
  const result = await getData();
  return result;
};

const getDatabyId = async (userId) => {
  const getData = async () => {
    const result = await petugas.getPetugasId(userId);
    return result;
  };
  const result = await getData();
  return result;
};

const addData = async (data) => {
  const addData = async () => {
    const result = await petugas.addPetugas(data);
    return result;
  };
  const result = await addData();
  return result;
};

const deleteData = async (userId) => {
  const deleteData = async () => {
    const result = await petugas.deletePetugas(userId);
    return result;
  };
  const result = await deleteData();
  return result;
};

const updateData = async (data) => {
  const updateData = async () => {
    const result = await petugas.updatePetugas(data);
    return result;
  };
  const result = await updateData();
  return result;
};

module.exports = {
  getData,
  getDatabyId,
  addData,
  deleteData,
  updateData
};
