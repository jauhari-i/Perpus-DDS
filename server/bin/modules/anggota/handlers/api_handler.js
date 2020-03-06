
const wrapper = require('../../../helpers/utils/wrapper');;
const queryHandler = require('../repositories/queries/query_handler');
const { ERROR:httpError, SUCCESS:http } = require('../../../helpers/http-status/status_code');

/** @desc
 * @bagan_anggota
 */

const getAnggota = async (req, res) => {
  const dataProc = async () => queryHandler.getAnggota();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Anggota', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Anggota', http.OK);
  };
  sendResponse(await dataProc());
};


module.exports = {
  getAnggota
};