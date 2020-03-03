const mysql = require('mysql');
const sinon = require('sinon');
const assert = require('assert');

const connectionMysql = require('../../../../../bin/helpers/databases/mysql/connection');

describe('Mysql Connection', () => {
  const host = {
    connectionLimit: '100',
    host: 'localhost',
    user: 'root',
    password: '12344321',
    database: 'mockup'
  };

  beforeEach(() => {
    sinon.stub(mysql, 'createPool');
  });

  afterEach(() => {
    mysql.createPool.restore();
  });

  it('should create connection', () => {
    const res = connectionMysql.createConnectionPool(host);
    assert.notEqual(res, null);
  });
  it('should cover branch condition create connection', () => {
    const res = connectionMysql.createConnectionPool(host);
    assert.notEqual(res, null);
  });
  it('should get connection', () => {
    const res = connectionMysql.getConnection(host);
    assert.notEqual(res, null);
  });
});
