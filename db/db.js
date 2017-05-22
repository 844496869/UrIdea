var mongoose = require('mongoose');
var dbHost = 'localhost';
var dbPort = '27017';
var db = mongoose.connect('mongodb://'+dbHost+':'+dbPort+'/uridea');//；连接数据库
