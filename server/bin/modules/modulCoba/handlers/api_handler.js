const wrapper = require("../../../helpers/utils/wrapper");
const queryHandler = require("../repositories/queries/query_handler");
const {
  ERROR: httpError,
  SUCCESS: http
} = require("../../../helpers/http-status/status_code");

const getHelloword = async (req, res) => {
  // console.log(req.params)
  // const {id} = req.params;
  const getData = async () => queryHandler.getHelloword();
  const sendResponse = async result => {
    result.err
      ? wrapper.response(
          res,
          "fail",
          result,
          "Get List Project",
          httpError.NOT_FOUND
        )
      : wrapper.response(
          res,
          "success",
          result,
          "Your Request Has Been Processed",
          http.OK
        );
  };
  sendResponse(await getData());
};

const getHellowordId = async (req, res) => {
  const { id_anggota } = req.params;
  const getDataId = async () => queryHandler.getHellowordId(id_anggota);
  const sendResponse = async result => {
    result.err
      ? wrapper.response(
          res,
          "fail",
          result,
          "Get List Project",
          httpError.NOT_FOUND
        )
      : wrapper.response(
          res,
          "success",
          result,
          "Your Request Has Been Processed",
          http.OK
        );
  };
  sendResponse(await getDataId());
};

const insertHelloword = async (req, res) => {
  const parameter = req.body;
  const insertData = async () => queryHandler.insertHelloword(parameter);
  const sendResponse = async result => {
    result.err
      ? wrapper.response(
          res,
          "fail",
          result,
          "Get List Project",
          httpError.NOT_FOUND
        )
      : wrapper.response(
          res,
          "success",
          result,
          "Your Request Has Been Processed",
          http.OK
        );
  };
  sendResponse(await insertData());
};

module.exports = {
  getHelloword,
  getHellowordId,
  insertHelloword
};
