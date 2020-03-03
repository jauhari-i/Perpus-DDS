const commandHandler = require('../../../../../../bin/modules/user/repositories/commands/command_handler');
const User = require('../../../../../../bin/modules/user/repositories/commands/domain');
const sinon = require('sinon');
const assert = require('assert');

describe('User-commandHandler', () => {

  const data = {
    success: true,
    data: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9',
    message: 'Your Request Has Been Processed',
    code: 200
  };

  const payload = {
    'username': 'alifsn',
    'password': 'telkomdev'
  };

  describe('postDataLogin', () => {

    it('should return access token', async() => {
      sinon.stub(User.prototype, 'generateCredential').resolves(data);

      const rs = await commandHandler.postDataLogin(payload);

      assert.notEqual(rs.data, null);
      assert.equal(rs.code, 200);

      User.prototype.generateCredential.restore();
    });
  });

  describe('register', () => {

    it('should info success register', async() => {
      sinon.stub(User.prototype, 'register').resolves(data);

      const rs = await commandHandler.registerUser(payload);

      assert.notEqual(rs.data, null);
      assert.equal(rs.code, 200);

      User.prototype.register.restore();
    });
  });
});
