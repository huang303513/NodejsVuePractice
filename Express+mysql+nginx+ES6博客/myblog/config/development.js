let devConfig = require('./default.js');

let proConfig = {
    devEnv: true,
    port: 9000,
    sslModel: false
}
let disConfig = Object.assign({}, devConfig, proConfig);

module.exports = disConfig;