/**
 * Created by Administrator on 2017/8/8 0008.
 */
var http = require("http");
var fs = require("fs");

function spider(path, callback) {
    var money = {
        hostname: 'lanlan.shikuaigou.com',
        port: 80,
        path: path,
        method: 'get'
    };


    var req = http.request(money, function (res) {
        var alldata = "";
        res.on("data", function (sum) {
            alldata += sum;
        })

        res.on("end", function () {
            callback(alldata);
        })
    })
    req.end();
}

module.exports = spider;




