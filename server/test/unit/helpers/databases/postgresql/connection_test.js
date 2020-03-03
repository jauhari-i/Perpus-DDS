const Postgre = require('pg');
const sinon = require('sinon');
const assert = require('assert');
const rewire = require('rewire');

const connection = require('../../../../../bin/helpers/databases/postgresql/connection');
const connRewire = rewire('../../../../../bin/helpers/databases/postgresql/connection');

describe('Postgre Connection', () => {

  const host = {
    host: 'tes',
    user: 'tes',
    password: 'tes',
    database: 'tes',
    port: 'tes',
    max:  'tes',
    idleTimeoutMillis: 'tes'
  };

  const host1 = {
    host: 'tes1',
    user: 'tes1',
    password: 'tes1',
    database: 'tes1',
    port: 'tes1',
    max:  'tes1',
    idleTimeoutMillis: 'tes1'
  };

  beforeEach(() => {
    sinon.stub(Postgre, 'Pool');
  });

  afterEach(() => {
    Postgre.Pool.restore();
  });

  describe('createConnectionPool', () => {
    it('should create postgre pool connection', () => {
      const res = connection.createConnectionPool(host);
      assert.notEqual(res, undefined);
    });
    it('should cover branch condition create postgre pool connection', () => {
      const res = connection.createConnectionPool(host1);
      connRewire.__set__('connectionPool',[]);
      assert.notEqual(res, undefined);
    });
  });

  describe('getConnection', () => {
    it('should get connection', () => {
      const res = connection.getConnection(host);
      assert.notEqual(res, undefined);
    });
  });
});
