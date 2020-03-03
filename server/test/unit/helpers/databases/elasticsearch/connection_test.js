const ElasticSearch = require('elasticsearch');
const sinon = require('sinon');
const rewire = require('rewire');
const assert = require('assert');

const connectionElastic = require('../../../../../bin/helpers/databases/elasticsearch/connection');
const connRewire = rewire('../../../../../bin/helpers/databases/elasticsearch/connection');

describe('Elastic Connection', () => {
  const esHost = { connectionClass: 'http',
    apiVersion: '6.4',
    host: [ 'localhost:9200' ],
    maxRetries: '10',
    requestTimeout: '30000'
  };
  let stubClientPing;

  beforeEach(() => {
    stubClientPing = sinon.stub(ElasticSearch, 'Client');
  });
  afterEach(() => {
    stubClientPing.restore();
  });
  it('should create connection', async() => {
    const createConnection = connRewire.__get__('createConnection');
    const res = await createConnection(esHost);
    assert.notEqual(res, null);
  });
  it('should cover branch condition create connection', async() => {
    const createConnection = connRewire.__get__('createConnection');
    await createConnection(esHost);
  });
  it('should get connection', async() => {
    const res = await connectionElastic.getConnection(esHost);
    assert.notEqual(res, null);
  });
  it('should cover branch condition get connection', async() => {
    const res = await connectionElastic.getConnection(esHost);
    assert.notEqual(res, null);
  });
});
