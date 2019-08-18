const winston = require('winston');
require('winston-logstash');
 
const Logger = function Logger() {
    this.logger = new (winston.Logger)({
        transports: [
            new (winston.transports.Logstash)({
                port: 12345,
                localhost: 'localhost',
                level: 'debug'
            })
        ]
    });
 
    // Logs an info message
    this.logInfo = function(message,  callback) {
      const _this = this;
      _this.logger.log('info', {message: message}, {stream: 'log'}, callback);
    }

    this.logDebug = function(message, callback) {
      const _this = this;
      _this.logger.debug('debug', {message: message}, {stream: 'debug'}, callback);
    }

};

l = new Logger()
l.logInfo('test-info')