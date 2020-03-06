const wrapper = require('../../../helpers/utils/wrapper');
const queryHandler = require('../repositories/queries/query_handler');
const { ERROR:httpError, SUCCESS:http } = require('../../../helpers/http-status/status_code');

const addPetugas = async (req, res) => {
  const data = {} =req.body
  console.log(data);
  
  const addPetugas = async () => queryHandler.addData(data);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Get List Petugas', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Your Request Has Been Processed', http.OK);
  };
  sendResponse(await addPetugas());
};

const getPetugas = async (req, res) => {
  const getData = async () => queryHandler.getData();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Get List Petugas', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Your Request Has Been Processed', http.OK);
  };
  sendResponse(await getData());
};

const getPetugasId = async (req, res) => {
  const {userId}=req.params
  const getData = async () => queryHandler.getDatabyId(userId);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Get List Petugas', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Your Request Has Been Processed', http.OK);
  };
  sendResponse(await getData());
};

const deletePetugas = async (req, res) => {
  const {userId}=req.params
  const deletePetugas = async () => queryHandler.deleteData(userId);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Get List Petugas', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Your Request Has Been Processed', http.OK);
  };
  sendResponse(await deletePetugas());
};

const updatePetugas = async (req, res) => {
  const {userId}=req.params,
        data={}=req.body
  data.kd=userId

  const updatePetugas = async () => queryHandler.updateData(data);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Get List Petugas', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Your Request Has Been Processed', http.OK);
  };
  sendResponse(await updatePetugas());
};


module.exports = {
  getPetugas,
  getPetugasId,
  addPetugas,
  deletePetugas,
  updatePetugas
};
