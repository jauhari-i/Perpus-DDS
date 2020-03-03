const sinon = require('sinon');
const assert = require('assert');

const Mongo = require('../../../../../bin/helpers/databases/mongodb/db');
const mongoConnection = require('../../../../../bin/helpers/databases/mongodb/connection');
const logger = require('../../../../../bin/helpers/utils/logger');

describe('Mongodb', () => {
  let stubMongoConn, stubGetDatabase, stubDb;
  beforeEach(async () => {
    stubGetDatabase = sinon.stub(Mongo.prototype, 'getDatabase');
    stubGetDatabase.resolves('test');
    stubMongoConn = sinon.stub(mongoConnection, 'getConnection');
    stubMongoConn.resolves({
      err: null,
      data: {
        db: {
          db: () => {
            return 'test';
          }
        }
      }
    });
    let tmp = await mongoConnection.getConnection();
    stubDb = sinon.stub(tmp.data.db, 'db');
    sinon.stub(logger, 'log');
  });
  afterEach(() => {
    stubMongoConn.restore();
    stubGetDatabase.restore();
    logger.log.restore();
  });

  describe('class', () => {
    it('should cover class', () => {
      Mongo.prototype.getDatabase.restore();
      const mongo = new Mongo('mongodb://localhost:27017/test');
      mongo.setCollection('tes');
      mongo.getDatabase();
    });
  });

  describe('findOne', () => {
    it('should return wrapper error when get connection error', async () => {
      stubMongoConn.resolves({
        err: {
          message: 'error'
        }
      });
      const res = await Mongo.prototype.findOne({});
      assert.equal(res.err.message, 'error');
    });
    it('should return wrapper error when db function is error', async () => {
      stubMongoConn.resolves({
        err: null,
        data: {
          db: {
            db: sinon.stub().callsFake(() => sinon.stub().rejects(new Error('Error Db function')))
          }
        }
      });
      const res = await Mongo.prototype.findOne({});
      assert.notEqual(res.err, null);
    });
    it('should return wrapper data when findOne not success', async () => {
      stubDb.returns({
        collection : () => {
          return {
            findOne: sinon.stub().callsFake(() => {
              return Promise.resolve({});
            })
          };
        }
      });
      const res = await Mongo.prototype.findOne({});
      assert.notEqual(res.err, null);
      stubDb.restore();
    });
    it('should return wrapper data when findOne success', async () => {
      stubDb.returns({
        collection : () => {
          return {
            findOne: sinon.stub().callsFake(() => {
              return Promise.resolve({ 'ok': true });
            })
          };
        }
      });
      const res = await Mongo.prototype.findOne({});
      assert.equal(res.data.ok, true);
      stubDb.restore();
    });
  });

  describe('findMany', () => {
    it('should return wrapper error when get connection error', async () => {
      stubMongoConn.resolves({
        err: {
          message: 'error'
        }
      });
      const res = await Mongo.prototype.findMany({});
      assert.equal(res.err.message, 'error');
    });
    it('should return wrapper error when db function is error', async () => {
      stubMongoConn.resolves({
        err: null,
        data: {
          db: {
            db: sinon.stub().callsFake(() => sinon.stub().rejects(new Error('Error Db function')))
          }
        }
      });
      const res = await Mongo.prototype.findMany({});
      assert.notEqual(res.err, null);
    });
    it('should return wrapper data when findMany not success', async () => {
      stubDb.returns({
        collection : () => {
          return {
            find: sinon.stub().callsFake(() => {
              return {
                toArray: () => {
                  return Promise.resolve([]);
                }
              };
            })
          };
        }
      });
      const res = await Mongo.prototype.findMany({});
      assert.notEqual(res.err, null);
      stubDb.restore();
    });
    it('should return wrapper data when findMany success', async () => {
      stubDb.returns({
        collection : () => {
          return {
            find: sinon.stub().callsFake(() => {
              return {
                toArray: () => {
                  return Promise.resolve([{ 'ok': true }, { 'ok': false }]);
                }
              };
            })
          };
        }
      });
      const res = await Mongo.prototype.findMany({});
      assert.equal(res.data[0].ok, true);
      stubDb.restore();
    });
  });

  describe('findAllData', () => {
    it('should return wrapper error when get connection error', async () => {
      stubMongoConn.resolves({
        err: {
          message: 'error'
        }
      });
      const res = await Mongo.prototype.findAllData({});
      assert.equal(res.err.message, 'error');
    });
    it('should return wrapper error when db function is error', async () => {
      stubMongoConn.resolves({
        err: null,
        data: {
          db: {
            db: sinon.stub().callsFake(() => sinon.stub().rejects(new Error('Error Db function')))
          }
        }
      });
      const res = await Mongo.prototype.findAllData({});
      assert.notEqual(res.err, null);
    });
    it('should return wrapper data when findAllData not success', async () => {
      class MockCursor {
        skip() {
          return new MockCursor();
        }
        limit() {
          return new MockCursor();
        }
        sort() {
          return new MockCursor();
        }
        toArray() {
          return Promise.resolve([]);
        }
      }
      stubDb.returns({
        collection : () => {
          return {
            find: sinon.stub().callsFake(() => {
              return new MockCursor();
            })
          };
        }
      });
      const res = await Mongo.prototype.findAllData({});
      assert.equal(res.err, 'Data Not Found, Please Try Another Input');
      stubDb.restore();
    });
    it('should return wrapper data when findAllData success', async () => {
      class MockCursor {
        skip() {
          return new MockCursor();
        }
        limit() {
          return new MockCursor();
        }
        sort() {
          return new MockCursor();
        }
        toArray() {
          return Promise.resolve([{ 'ok': true }, { 'ok': false }]);
        }
      }
      stubDb.returns({
        collection : () => {
          return {
            find: sinon.stub().callsFake(() => {
              return new MockCursor();
            })
          };
        }
      });
      const res = await Mongo.prototype.findAllData({});
      assert.equal(res.data[0].ok, true);
      stubDb.restore();
    });
  });

  describe('insertOne', () => {
    it('should return wrapper error when get connection error', async () => {
      stubMongoConn.resolves({
        err: {
          message: 'error'
        }
      });
      const res = await Mongo.prototype.insertOne({});
      assert.equal(res.err.message, 'error');
    });
    it('should return wrapper error when db function is error', async () => {
      stubMongoConn.resolves({
        err: null,
        data: {
          db: {
            db: sinon.stub().callsFake(() => sinon.stub().rejects(new Error('Error Db function')))
          }
        }
      });
      const res = await Mongo.prototype.insertOne({});
      assert.notEqual(res.err, null);
    });
    it('should return wrapper data when insertOne not success', async () => {
      stubDb.returns({
        collection : () => {
          return {
            insertOne: sinon.stub().callsFake(() => {
              return Promise.resolve({ result: {
                n : 0
              }});
            })
          };
        }
      });
      const res = await Mongo.prototype.insertOne({});
      assert.equal(res.err, 'Failed Inserting Data to Database');
      stubDb.restore();
    });
    it('should return wrapper data when insertOne success', async () => {
      stubDb.returns({
        collection : () => {
          return {
            insertOne: sinon.stub().callsFake(() => {
              return Promise.resolve({ result: {
                n : 1
              }});
            })
          };
        }
      });
      const res = await Mongo.prototype.insertOne({});
      assert.notEqual(res.data, null);
      stubDb.restore();
    });
  });

  describe('insertMany', () => {
    it('should return wrapper error when get connection error', async () => {
      stubMongoConn.resolves({
        err: {
          message: 'error'
        }
      });
      const res = await Mongo.prototype.insertMany({});
      assert.equal(res.err.message, 'error');
    });
    it('should return wrapper error when db function is error', async () => {
      stubMongoConn.resolves({
        err: null,
        data: {
          db: {
            db: sinon.stub().callsFake(() => sinon.stub().rejects(new Error('Error Db function')))
          }
        }
      });
      const res = await Mongo.prototype.insertMany({});
      assert.notEqual(res.err, null);
    });
    it('should return wrapper data when insertMany not success', async () => {
      stubDb.returns({
        collection : () => {
          return {
            insertMany: sinon.stub().callsFake(() => {
              return Promise.resolve({ result: {
                n : 0
              }});
            })
          };
        }
      });
      const res = await Mongo.prototype.insertMany({});
      assert.equal(res.err, 'Failed Inserting Data to Database');
      stubDb.restore();
    });
    it('should return wrapper data when insertMany success', async () => {
      stubDb.returns({
        collection : () => {
          return {
            insertMany: sinon.stub().callsFake(() => {
              return Promise.resolve({ result: {
                n : 1
              }});
            })
          };
        }
      });
      const res = await Mongo.prototype.insertMany({});
      assert.notEqual(res.data, null);
      stubDb.restore();
    });
  });

  describe('upsertOne', () => {
    it('should return wrapper error when get connection error', async () => {
      stubMongoConn.resolves({
        err: {
          message: 'error'
        }
      });
      const res = await Mongo.prototype.upsertOne({});
      assert.equal(res.err.message, 'error');
    });
    it('should return wrapper error when db function is error', async () => {
      stubMongoConn.resolves({
        err: null,
        data: {
          db: {
            db: sinon.stub().callsFake(() => sinon.stub().rejects(new Error('Error Db function')))
          }
        }
      });
      const res = await Mongo.prototype.upsertOne({});
      assert.notEqual(res.err, null);
    });
    it('should return wrapper data when insert success', async () => {
      sinon.stub(Mongo.prototype, 'findOne').resolves({
        data: 'data'
      });
      stubDb.returns({
        collection : () => {
          return {
            update: sinon.stub().callsFake(() => {
              return Promise.resolve({ result: {
                nModified : 0
              }});
            })
          };
        }
      });
      const res = await Mongo.prototype.upsertOne({data: 'data'});
      assert.equal(res.data, 'data');
      stubDb.restore();
      Mongo.prototype.findOne.restore();
    });
    it('should return wrapper data when upsert failed', async () => {
      stubDb.returns({
        collection : () => {
          return {
            update: sinon.stub().callsFake(() => {
              return Promise.resolve({ result: {
                nModified : -1
              }});
            })
          };
        }
      });
      const res = await Mongo.prototype.upsertOne({data: 'data'});
      assert.equal(res.err, 'Failed upsert data');
      stubDb.restore();
    });
    it('should return wrapper data when upsertOne success', async () => {
      sinon.stub(Mongo.prototype, 'findOne').resolves({
        data: 'data'
      });
      stubDb.returns({
        collection : () => {
          return {
            update: sinon.stub().callsFake(() => {
              return Promise.resolve({ result: {
                nModified : 1
              }});
            })
          };
        }
      });
      const res = await Mongo.prototype.upsertOne({data: 'data'});
      assert.equal(res.data, 'data');
      stubDb.restore();
      Mongo.prototype.findOne.restore();
    });
  });

  describe('countData', () => {
    it('should return wrapper error when get connection error', async () => {
      stubMongoConn.resolves({
        err: {
          message: 'error'
        }
      });
      const res = await Mongo.prototype.countData({});
      assert.equal(res.err.message, 'error');
    });
    it('should return wrapper error when db function is error', async () => {
      stubMongoConn.resolves({
        err: null,
        data: {
          db: {
            db: sinon.stub().callsFake(() => sinon.stub().rejects(new Error('Error Db function')))
          }
        }
      });
      const res = await Mongo.prototype.countData({});
      assert.notEqual(res.err, null);
    });
    it('should return wrapper data when countData not success', async () => {
      stubDb.returns({
        collection : () => {
          return {
            count: sinon.stub().callsFake(() => {
              return Promise.resolve({});
            })
          };
        }
      });
      const res = await Mongo.prototype.countData({});
      assert.equal(res.err, 'Data Not Found , Please Try Another Input');
      stubDb.restore();
    });
    it('should return wrapper data when countData success', async () => {
      stubDb.returns({
        collection : () => {
          return {
            count: sinon.stub().callsFake(() => {
              return Promise.resolve({ data : 'data'});
            })
          };
        }
      });
      const res = await Mongo.prototype.countData({});
      assert.equal(res.data.data, 'data');
      stubDb.restore();
    });
  });

});
