const { config } = require('dotenv')

config();

exports.Urls = require('./urls');
exports.Credentials = require('./credentials');
exports.Timeouts = require('./timeouts');