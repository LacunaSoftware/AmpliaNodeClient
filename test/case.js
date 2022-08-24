const { Config } = require('./config');

module.exports = {
    skipWhenNotConfigured: (!Config.AMPLIA_ENDPOINT || !Config.AMPLIA_API_KEY || !Config.AMPLIA_CA_ID)
        ? test.skip
        : test,
}