const azure = require('azure-storage');
const sinon = require('sinon');
const assert = require('assert');

const Blob = require('../../../../../bin/helpers/components/azure-blob/blob');
const logger = require('../../../../../bin/helpers/utils/logger');

describe('Azure Blob', () => {

  let sinonSandbox;

  beforeEach((done) => {
    sinonSandbox = sinon.sandbox.create();
    sinon.stub(logger, 'log');
    done();
  });

  afterEach((done) => {
    sinonSandbox.restore();
    logger.log.restore();
    done();
  });

  describe('createBlob', () => {
    it('should return success', async() => {
      sinonSandbox.stub(azure, 'createBlobService').returns({
        createBlockBlobFromLocalFile: sinon.stub().yields(null)
      });
      let blob = new Blob('');
      const res = await blob.createBlob('','','');
      assert.equal(res.data, true);
    });
    it('should return error', async() => {
      sinonSandbox.stub(azure, 'createBlobService').returns({
        createBlockBlobFromLocalFile: sinon.stub().yields('error')
      });
      let blob = new Blob('');
      const res = await blob.createBlob('','','');
      assert.equal(res.err, 'error');
    });
  });

  describe('removeBlob', () => {
    it('should return success', async() => {
      sinonSandbox.stub(azure, 'createBlobService').returns({
        deleteBlob: sinon.stub().yields(null)
      });
      let blob = new Blob('');
      const res = await blob.removeBlob('','');
      assert.equal(res.data, true);
    });
    it('should return error', async() => {
      sinonSandbox.stub(azure, 'createBlobService').returns({
        deleteBlob: sinon.stub().yields('error')
      });
      let blob = new Blob('');
      const res = await blob.removeBlob('','');
      assert.equal(res.err, 'error');
    });
  });
});
