// node 后端服务器入口
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');

// app.use(cors());

app.all('*', function (req, res, next) {
// 设置cors跨域
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//注册api路由
app.use('/api/user', userApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
