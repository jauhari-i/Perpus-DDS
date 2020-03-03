const sinon = require('sinon');
const { expect } = require('chai');

const DB = require('../../../../../bin/helpers/databases/postgresql/db');
const pool = require('../../../../../bin/helpers/databases/postgresql/connection');
const config = require('../../../../../bin/infra/configs/global_config');
const logger = require('../../../../../bin/helpers/utils/logger');

describe('Postgre DB', () => {

  let pgPool;
  let db;

  before(() => {
    db = new DB(config.get('/postgreConfig'));
  });

  after(() => {
    db = undefined;
  });

  beforeEach(() => {
    sinon.stub(logger, 'log');
    pgPool = sinon.stub(pool, 'getConnection');
    pgPool.resolves({
      connect: () => {
        return {
          query : sinon.stub().yields(null, {
            rows: true
          }),
          release : sinon.stub()
        };
      }
    });
  });

  afterEach(()=> {
    pgPool.restore();
    logger.log.restore();
  });

  describe('query', () => {
    it('should return success', async() => {
      const res = await db.query('');
      expect(res).to.be.an('object');
      expect(res).to.haveOwnProperty('data').equal(true);
    });
    it('should create new connection', async() => {
      pgPool.resolves({});
      sinon.stub(pool, 'createConnectionPool').resolves({
        connect: () => {
          return {
            query : sinon.stub().yields(null, {
              rows: true
            }),
            release : sinon.stub()
          };
        }
      });
      const res = await db.query('');
      expect(res).to.be.an('object');
      expect(res).to.haveOwnProperty('data').equal(true);
      pool.createConnectionPool.restore();
    });
    it('should return error', async() => {
      let error = new Error('This is error');
      pgPool.resolves({
        connect: () => {
          return {
            query : sinon.stub().yields(error, null),
            release : sinon.stub()
          };
        }
      });
      const res = await db.query('');
      expect(res).to.be.an('object');
      expect(res).to.haveOwnProperty('err')
        .to.be.a('string')
        .equal('This is error');
    });
  });

  describe('command', () => {
    it('should return success', async() => {
      pgPool.resolves({
        connect: () => {
          return {
            query : sinon.stub().resolves({}),
            release : sinon.stub()
          };
        },
        query: () => {
          return true;
        }
      });
      const res = await db.command('');
      expect(res).to.be.an('object');
      expect(res).to.haveOwnProperty('data').equal(true);
    });
    it('should create new connection', async() => {
      pgPool.resolves({});
      sinon.stub(pool, 'createConnectionPool').resolves({
        connect: () => {
          return {
            query : sinon.stub().resolves({}),
            release : sinon.stub()
          };
        },
        query: () => {
          return true;
        }
      });
      const res = await db.command('');
      expect(res).to.be.an('object');
      expect(res).to.haveOwnProperty('data').equal(true);
      pool.createConnectionPool.restore();
    });
    it('should return error', async() => {
      pgPool.resolves({
        connect: () => {
          return {
            query : sinon.stub(),
            release : sinon.stub()
          };
        }
      });
      const res = await db.command('');
      expect(res).to.be.an('object');
      expect(res).to.haveOwnProperty('err').to.be.not.null;
    });
  });

});
