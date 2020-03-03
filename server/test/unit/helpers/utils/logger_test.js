const sinon = require('sinon');
const winston = require('winston');

const sentryLog = require('../../../../bin/helpers/components/sentry/sentry_log');
const logger = require('../../../../bin/helpers/utils/logger');

describe('Logger', () => {

  beforeEach(() => {
    sinon.stub(winston, 'createLogger').resolves(
      {
        info: sinon.stub()
      }
    );
    sinon.stub(sentryLog, 'sendError');
  });

  afterEach(() => {
    winston.createLogger.restore();
    sentryLog.sendError.restore();
  });

  describe('log', () => {
    it('should send log', () => {
      logger.log('', { err: 'test'}, '');
    });
  });
});
