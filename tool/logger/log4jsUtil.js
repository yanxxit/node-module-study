/**
 * Created by mohoo on 15/3/4.
 */

//加载log4js
log4js = require("log4js");
log4js.configure('./log4js.json', {});
var logger = log4js.getLogger('WAP');

/**
 * 正常日志记录
 * @param message 日志内容
 */
exports.info = function (message) {
    logger.info(message);
};


/**
 * 调试日志记录
 * @param message 日志内容
 */
exports.debug = function (message) {
    logger.debug(message);
};


/**
 *
 * @param message 日志内容
 */
exports.trace = function (message) {
    logger.trace(message);
};


/**
 * 告警日志记录
 * @param message 日志内容
 */
exports.warn = function (message) {
    logger.warn(message);
};


/**
 * 错误日志记录
 * @param message 日志内容
 */
exports.error = function (message) {
    logger.error(message);
};

/**
 *
 * @param message
 */
exports.fatal = function (message) {
    logger.fatal(message);
};