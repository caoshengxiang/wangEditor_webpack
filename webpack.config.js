/**
 * Created by allen on 17-4-26.
 */
var minimist = require('minimist'); // 参数解析工具

var args = minimist(process.argv.slice(2));

function buildConfig(env) {
    console.log('环境>>>>>>>>>>>> ' + env)
    return require('./build/webpack.' + env + '.conf.js')({ env: env })
}


module.exports = buildConfig(args.env);