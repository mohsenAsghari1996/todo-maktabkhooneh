/**
 * Created by MOHSEN on 4/15/2019.
 */
const rewireMobX = require('react-app-rewire-mobx');
module.exports = function override(config, env) {
    config = rewireMobX(config, env);
    return config;
}
