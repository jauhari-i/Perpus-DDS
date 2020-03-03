
const assert = require('assert');
const sinon = require('sinon');

const Query = require('../../../../../../bin/modules/user/repositories/queries/query');

describe('findOneUser', () => {

  const db = {
    setCollection: sinon.stub(),
    findOne: sinon.stub().resolves({
      'err': null,
      'data': {
        '_id': '5bac53b45ea76b1e9bd58e1c',
        'username': 'alifsndev',
        'password': '8789ad457ac341e4fc4cad32'
      }
    })
  };

  it('should return success', async() => {
    const query = new Query(db);
    const result = await query.findOneUser({});
    assert.notEqual(result.data, null);
    assert.equal(result.data.username, 'alifsndev');
  });

});

describe('findById', () => {

  const db = {
    setCollection: sinon.stub(),
    findOne: sinon.stub().resolves({
      'err': null,
      'data': {
        '_id': '5bac53b45ea76b1e9bd58e1c',
        'username': 'alifsndev',
        'password': '8789ad457ac341e4fc4cad32'
      }
    })
  };

  it('should return success', async() => {
    const query = new Query(db);
    const result = await query.findById('5bac53b45ea76b1e9bd58e1c');
    assert.notEqual(result.data, null);
    assert.equal(result.data.username, 'alifsndev');
  });

});
