const wrapper = require('../../../helpers/utils/wrapper');
const queryHandler = require('../repositories/queries/query_handler');
const { ERROR:httpError, SUCCESS:http } = require('../../../helpers/http-status/status_code');

const getProjectList = async (req, res) => {
  const getData = async () => queryHandler.getProjectList();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Get List Project', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Your Request Has Been Processed', http.OK);
  };
  sendResponse(await getData());
};

module.exports = {
  getProjectList
};
