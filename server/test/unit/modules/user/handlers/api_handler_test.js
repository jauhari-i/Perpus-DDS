const sinon = require('sinon');

const userHandler = require('../../../../../bin/modules/user/handlers/api_handler');
const commandHandler = require('../../../../../bin/modules/user/repositories/commands/command_handler');
const validator = require('../../../../../bin/modules/user/utils/validator');

describe('User Api Handler', () => {

  let commandStub;

  const req = {
    body: {}
  };

  const res = {
    send: sinon.stub()
  };

  beforeEach(() => {
    commandStub = sinon.stub(commandHandler, 'postDataLogin');
    commandStub.resolves({
      err: 'user not found',
      data: null
    });
  });

  afterEach(() => {
    commandStub.restore();
  });

  describe('postDataLogin', () => {
    it('should cover error validation', async() => {
      await userHandler.postDataLogin(req, res);
    });
    it('should return user not found', async() => {
      sinon.stub(validator, 'isValidPayload').resolves({
        err: null,
        data: {}
      });
      await userHandler.postDataLogin(req, res);
      validator.isValidPayload.restore();
    });
    it('should return password invalid', async() => {
      sinon.stub(validator, 'isValidPayload').resolves({
        err: null,
        data: {}
      });
      commandStub.resolves({
        err: 'password invalid!',
        data: null
      });
      await userHandler.postDataLogin(req, res);
      validator.isValidPayload.restore();
    });
  });

  describe('registerUser', () => {
    it('should return error validation', () => {
      userHandler.registerUser(req, res);
    });
    it('should return success', () => {
      sinon.stub(validator, 'isValidPayload').resolves({
        err: null,
        data: {}
      });
      sinon.stub(commandHandler, 'registerUser').resolves({
        err: null,
        data: {}
      });
      userHandler.registerUser(req, res);
      validator.isValidPayload.restore();
      commandHandler.registerUser.restore();
    });
  });
});
