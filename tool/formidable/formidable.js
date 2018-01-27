/**
 * Created by my on 2017/11/21.
 */
var formidable = require('formidable');

var form = new formidable.IncomingForm();   //创建上传表单
form.encoding = 'utf-8';        //设置编辑
form.uploadDir = 'public/uploads/';     //设置上传目录
form.keepExtensions = true;     //保留后缀
form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小

form.parse(req, function (err, fields, files) {
    if (err) {
        return res.json({status: 100, data: '图片上传失败，请稍后再试'})
    }
});