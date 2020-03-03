const sinon = require('sinon');
const { expect } = require('chai');

const helperElastic = require('../../../../../bin/helpers/databases/elasticsearch/db');
const connElastic = require('../../../../../bin/helpers/databases/elasticsearch/connection');

describe('Elastic DB', () => {
  let elastic;
  const esHost = { connectionClass: 'http',
    apiVersion: '6.4',
    host: [ 'localhost:9200' ],
    maxRetries: '10',
    requestTimeout: '30000'
  };
  beforeEach(() => {
    elastic = sinon.stub(connElastic, 'getConnection');
    elastic.returns({
      indices: {
        create: sinon.stub().yields('fail', null, null)
      },
      cat: {
        indices: sinon.stub().yields('fail', null, null)
      },
      index: sinon.stub().yields('fail', null, null),
      count: sinon.stub().yields('fail', null, null),
      delete: sinon.stub().yields('fail', null, null),
      update: sinon.stub().yields('fail', null, null),
      search: sinon.stub().yields('fail', null, null),
      bulk: sinon.stub().yields('fail', null, null),
      clearScroll: sinon.stub().yields('fail', null, null)
    });
  });
  afterEach(() => {
    elastic.restore();
  });

  describe('createIndex', () => {
    it('should return wrapper error', async () => {
      expect(await helperElastic.createIndex(esHost, {}))
        .to.haveOwnProperty('err').equal('failed to create index, fail');
    });
    it('should return wrapper success', async () => {
      elastic.returns({
        indices: {
          create: sinon.stub().yields(null, 'success')
        }
      });
      expect(await helperElastic.createIndex(esHost, {}))
        .to.haveOwnProperty('data').equal('success');
    });
  });

  describe('getAllIndex', () => {
    it('should return wrapper error', async () => {
      expect(await helperElastic.getAllIndex(esHost, {}))
        .to.haveOwnProperty('err').equal('failed to create index, fail');
    });
    it('should return wrapper success', async () => {
      elastic.returns({
        cat: {
          indices: sinon.stub().yields(null, 'success')
        }
      });
      expect(await helperElastic.getAllIndex(esHost, {}))
        .to.haveOwnProperty('data').equal('success');
    });
  });

  describe('insertData', () => {
    it('should return wrapper error', async () => {
      expect(await helperElastic.insertData(esHost, {}))
        .to.haveOwnProperty('err').equal('failed to create index, fail');
    });
    it('should return wrapper success', async () => {
      elastic.returns({
        index: sinon.stub().yields(null, 'success')
      });
      expect(await helperElastic.insertData(esHost, { body: { _id: 1 } }))
        .to.haveOwnProperty('data').equal('success');
    });
  });

  describe('countData', () => {
    it('should return wrapper error', async () => {
      expect(await helperElastic.countData(esHost, {}))
        .to.haveOwnProperty('err').equal('failed to count data, fail');
    });
    it('should return wrapper success', async () => {
      elastic.returns({
        count: sinon.stub().yields(null, 'success')
      });
      expect(await helperElastic.countData(esHost, {}))
        .to.haveOwnProperty('data').equal('success');
    });
  });

  describe('deleteData', () => {
    it('should return wrapper error', async () => {
      expect(await helperElastic.deleteData(esHost, {}))
        .to.haveOwnProperty('err').equal('failed to delete data, fail');
    });
    it('should return wrapper success', async () => {
      elastic.returns({
        delete: sinon.stub().yields(null, 'success')
      });
      expect(await helperElastic.deleteData(esHost, {}))
        .to.haveOwnProperty('data').equal('success');
    });
  });

  describe('updateData', () => {
    it('should return wrapper error', async () => {
      expect(await helperElastic.updateData(esHost, {}))
        .to.haveOwnProperty('err').equal('failed to update data, fail');
    });
    it('should return wrapper success', async () => {
      elastic.returns({
        update: sinon.stub().yields(null, 'success')
      });
      expect(await helperElastic.updateData(esHost, {}))
        .to.haveOwnProperty('data').equal('success');
    });
  });

  describe('clearScroll', () => {
    it('should return wrapper error', async () => {
      expect(await helperElastic.clearScroll(esHost, {}))
        .to.haveOwnProperty('err').equal('failed to scroll data, fail');
    });
    it('should return wrapper success', async () => {
      elastic.returns({
        clearScroll: sinon.stub().yields(null, 'success')
      });
      expect(await helperElastic.clearScroll(esHost, {}))
        .to.haveOwnProperty('data').equal('success');
    });
  });

  describe('sugesters', () => {
    it('should return wrapper error', async () => {
      expect(await helperElastic.sugesters(esHost, {}))
        .to.haveOwnProperty('err').equal('failed to find data, fail');
    });
    it('should return wrapper success', async () => {
      let data = {
        hits: {
          hits: [ { _source: 'success' } ]
        }
      };
      elastic.returns({
        search: sinon.stub().yields(null, data)
      });
      const res = await helperElastic.sugesters(esHost, {});
      expect(res.data[0]).to.equal('success');
    });
  });

  describe('findAll', () => {
    it('should return wrapper error', async () => {
      expect(await helperElastic.findAll(esHost, {}))
        .to.haveOwnProperty('err').equal('failed to find data, fail');
    });
    it('should return wrapper success', async () => {
      let data = {
        hits: {
          hits: [ { _source: 'success' } ]
        }
      };
      elastic.returns({
        search: sinon.stub().yields(null, data)
      });
      const res = await helperElastic.findAll(esHost, {});
      expect(res.data[0]).to.equal('success');
    });
    it('should return empty data', async () => {
      let data = {
        hits: {
          hits: []
        }
      };
      elastic.returns({
        search: sinon.stub().yields(null, data)
      });
      const res = await helperElastic.findAll(esHost, {});
      expect(res.data.length).to.equal(0);
    });
  });

  describe('findOne', () => {
    it('should return wrapper error', async () => {
      expect(await helperElastic.findOne(esHost, {}))
        .to.haveOwnProperty('err').equal('failed to find data, fail');
    });
    it('should return wrapper success', async () => {
      let data = {
        hits: {
          hits: [ { _source: 'success' } ]
        }
      };
      elastic.returns({
        search: sinon.stub().yields(null, data)
      });
      const res = await helperElastic.findOne(esHost, {});
      expect(res.data).to.equal('success');
    });
    it('should return empty data', async () => {
      let data = {
        hits: {
          hits: []
        }
      };
      elastic.returns({
        search: sinon.stub().yields(null, data)
      });
      const res = await helperElastic.findOne(esHost, {});
      expect(res.data).to.equal(null);
    });
  });

  describe('insertMany', () => {
    it('should return wrapper error', async () => {
      expect(await helperElastic.insertMany(esHost, {}))
        .to.haveOwnProperty('err').equal('failed to insert all data, fail');
    });
    it('should return wrapper success', async () => {
      elastic.returns({
        bulk: sinon.stub().yields(null, 'success')
      });
      expect(await helperElastic.insertMany(esHost, {}))
        .to.haveOwnProperty('data').equal('success');
    });
  });
});
