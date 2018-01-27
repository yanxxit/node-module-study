/**
 * Created by mohoo on 15/3/4.
 */
var request = require('request');
var apis = {timeout: 10000};
var headers = {
    'User-Agent': 'request-wap-oauth',
    'X_HPZ_APPLICATION_ID': 'wechat',
    'Content-Type': 'application/json'
};
/**
 * get请求
 * @param url 请求的url地址
 * @param callback 回调函数
 */
exports.get = function (url, callback) {
    var options = {
        url: url,
        method: 'GET',
        headers: headers,
        json: true,
        timeout: apis.timeout
    };
    request(options, function (error, response, content) {
        if (!error && response.statusCode == 200) {
            callback(error, response, content);
        } else {
            callback(error);
        }
    });
};
/**
 * post 请求
 * @param url url地址
 * @param params 请求参数
 * @param callback 回调函数
 */
exports.post = function (url, params, callback) {
    var options = {
        url: url,
        method: 'POST',
        json: true,
        body: params,
        headers: headers,
        timeout: apis.timeout
    };
    request(options, function (error, response, content) {
        if (!error && response.statusCode == 200) {
            callback(error, response, content);
        } else {
            callback(error);
        }
    });
};
/**
 * POST表单提交
 * @param url
 * @param params
 * @param callback
 */
exports.postForm = function (url, params, callback) {
    var options = {
        url: url,
        method: 'POST',
        json: true,
        form: params,
        headers: headers,
        timeout: apis.timeout
    };
    request(options, function (error, response, content) {
        console.log(content)
        if (!error && response.statusCode == 200) {
            callback(error, response, content);
        } else {
            callback(error);
        }
    });
};