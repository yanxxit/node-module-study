/**
 * 创建Module对象
 * Created by Administrator on 2016/11/16.
 */
const _ = require("underscore")._;
const logger = {
    info: function (data) {
        console.log(data)
    }
};
const mysql = require('mysql');


class MysqlPoolClass {
    constructor(host, user, password, database, port) {
        this.host = host || 'localhost';//地址
        this.user = user || 'root';//用户名
        this.password = password || '';//密码
        this.database = database || '';//数据库
        this.port = port || 3306;//端口号
        this.pool = mysql.createPool({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database,
            port: this.port
        })
    }

    ExecSql(sql, cb) {
        this.pool.getConnection(function (err, conn) {
            if (err) cb('获取连接失败' + err);
            logger.info(sql)
            conn.query(sql, function (terr, data) {
                if (terr) console.log(terr);
                conn.release();
                logger.info('数据库操作结果：' + JSON.stringify(data))
                cb(terr, data);
            });
        });
    }

    //查询
    select(sql, where, cb) {
        console.log(sql)
        console.log(where)
        if (sql.indexOf('where') != -1) {
            sql = sql + " " + where

        } else {
            sql = sql + " where " + where
        }
        this.ExecSql(sql, function (err, data) {
            cb(err, data);
        });
    }

    //添加记录
    insert(key, value, cb) {

    }

    //删除
    delete(key, cb) {
    }

    //修改
    update(key, value, cb) {
    }
}

// var client = new MysqlPoolClass('localhost', 'root', 'root', 'telecom-activity', '3306');
//
// client.select('select id,openid,deviceno,date,createtime,updatetime,remark from sh_ltflow where ', 'id=1', function (err, data) {
//     console.log(err)
//     console.log(JSON.stringify(data))
// });

module.exports = MysqlPoolClass;

