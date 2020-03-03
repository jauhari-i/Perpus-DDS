const assert = require('assert');

const commonUtil = require('../../../../bin/helpers/utils/common');

describe('Common', () => {
  describe('getLastFromURL', () => {
    it('should return succes', async() => {
      const res = await commonUtil.getLastFromURL('http://localhost:9000/dev');
      assert(res, 'dev');
    });
  });
});

