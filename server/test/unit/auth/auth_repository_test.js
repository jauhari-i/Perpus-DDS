const assert = require('assert');
const { findByUsername } = require('../../../bin/auth/auth_repository');

describe('Auth Repository', () => {

  describe('findByUsername', () => {
    it('should error invalid password', () => {
      findByUsername('test', user => {
        assert.equal(user.username, undefined);
        assert.equal(user.password, undefined);
      });
    });
  });
});
