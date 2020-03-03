const assert = require('assert');
const sinon = require('sinon');

const command = require('../../../../../../bin/modules/user/repositories/commands/command');
const query = require('../../../../../../bin/modules/user/repositories/queries/query');
const jwtAuth = require('../../../../../../bin/auth/jwt_auth_helper');
const User = require('../../../../../../bin/modules/user/repositories/commands/domain');
const logger = require('../../../../../../bin/helpers/utils/logger');

describe('User-domain', () => {

  const queryResult = {
    'err': null,
    'data': {
      '_id': '5bac53b45ea76b1e9bd58e1c',
      'username': 'alifsndev',
      'password': '8789ad457ac341e4fc4cad32'
    },
    'message': 'Your Request Has Been Processed',
    'code': 200
  };

  const payload = {
    'username': 'alifsndev',
    'password': 'telkomdev123'
  };

  const db = {
    setCollection: sinon.stub()
  };

  const user = new User(db);

  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9';

  before(() => {
    sinon.stub(logger, 'log');
  });

  after(() => {
    logger.log.restore();
  });

  describe('generateCredential', () => {

    it('should generate jwt token', async() => {
      sinon.stub(query.prototype, 'findOneUser').resolves(queryResult);
      sinon.stub(jwtAuth, 'generateToken').resolves(token);

      const res = await user.generateCredential(payload);
      assert.equal(res.data, token);

      query.prototype.findOneUser.restore();
      jwtAuth.generateToken.restore();
    });

    it('should return error', async() => {
      sinon.stub(query.prototype, 'findOneUser').resolves({ err: 'err'});

      const res = await user.generateCredential(payload);
      assert.notEqual(res.err, null);

      query.prototype.findOneUser.restore();

    });

    it('should return user invalid', async() => {
      const payload = {
        'username': 'alifsndev',
        'password': 'telkomdev'
      };

      sinon.stub(query.prototype, 'findOneUser').resolves(queryResult);

      const res = await user.generateCredential(payload);
      assert.notEqual(res.err, null);

      query.prototype.findOneUser.restore();
    });
  });

  describe('register', () => {

    it('should success register', async() => {
      sinon.stub(query.prototype, 'findOneUser').resolves({ data: null});
      sinon.stub(command.prototype, 'insertOneUser').resolves(queryResult);

      const res = await user.register(payload);
      assert.equal(res.data.username, 'alifsndev');

      query.prototype.findOneUser.restore();
      command.prototype.insertOneUser.restore();
    });

    it('should return error', async() => {
      sinon.stub(query.prototype, 'findOneUser').resolves(queryResult);

      const res = await user.register(payload);
      assert.notEqual(res.err, null);

      query.prototype.findOneUser.restore();
    });
  });
});
