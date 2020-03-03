const mysqlHelper = require('../../../../../bin/helpers/databases/mysql/db');
const mysqlConnection = require('../../../../../bin/helpers/databases/mysql/connection');
const config = require('../../../../../bin/infra/configs/global_config');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Mysql DB', () => {
  let db = null;
  let stubConnection;
  before(() => {
    db = new mysqlHelper(config.get('/mysqlConfig'));
  });
  after(() => {
    db = null;
  });
  beforeEach(() => {
    let expectedResultGetConn = {
      release: sinon.spy(),
      query : sinon.stub().yields(null, {
        res : true
      })
    };
    stubConnection = sinon.stub(mysqlConnection, 'getConnection');
    stubConnection.resolves({
      getConnection: sinon.stub().yields(null, expectedResultGetConn)
    });
  });
  afterEach(() => {
    stubConnection.restore();
  });
  it('expect query to be resolved', async () => {
    const res = await db.query('');
    expect(res).to.be.an('object');
    expect(res).to.haveOwnProperty('data')
      .to.be.an('object')
      .to.haveOwnProperty('res')
      .equal(true);
  });
  it('should create a new conn', async () => {
    stubConnection.resolves({});
    let expectedResultGetConn = {
      release: sinon.spy(),
      query : sinon.stub().yields(null, {
        res : true
      })
    };
    let stubCreateConn = sinon.stub(mysqlConnection, 'createConnectionPool');
    stubCreateConn.resolves({
      getConnection: sinon.stub().yields(null, expectedResultGetConn)
    });
    expect(await db.query('')).to.be.an('object');
  });
  it('expect query to be error', async () => {
    stubConnection.resolves({
      getConnection: sinon.stub().yields(null, {
        release: sinon.spy(),
        query : sinon.stub().yields({
          message: 'error'
        }, null)
      })
    });
    expect(await db.query('')).to.be.an('object');
    expect(await db.query('')).to.haveOwnProperty('err')
      .equal('error');
  });
  it('should cover the error branches on getting connection conn lost', async () => {
    stubConnection.resolves({
      getConnection: sinon.stub().yields({
        code: 'PROTOCOL_CONNECTION_LOST'
      }, {
        release: sinon.spy()
      })
    });
    expect(await db.query('')).to.be.an('object');
    expect(await db.query('')).to.haveOwnProperty('err')
      .to.be.a('string')
      .equal('Database connection was closed.');
  });
  it('should cover the error branches on getting connection count err', async () => {
    stubConnection.resolves({
      getConnection: sinon.stub().yields({
        code: 'ER_CON_COUNT_ERROR'
      }, {
        release: sinon.spy()
      })
    });
    expect(await db.query('')).to.be.an('object');
    expect(await db.query('')).to.haveOwnProperty('err')
      .to.be.a('string')
      .equal('Database has too many connections.');
  });
  it('should cover the error branches on getting connection refused', async () => {
    stubConnection.resolves({
      getConnection: sinon.stub().yields({
        code: 'ECONNREFUSED'
      }, {
        release: sinon.spy()
      })
    });
    expect(await db.query('')).to.be.an('object');
    expect(await db.query('')).to.haveOwnProperty('err')
      .to.be.a('string')
      .equal('Database connection was refused.');
  });
});
