const express = require('express');
const db = require('./db/connect');
const bodyparser = require('body-parser'); //处理post请求的body数据
const path = require('path');

const app = express();
//解析表单数据 x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));
//解析json数据
app.use(bodyparser.json());

//引入静态资源库
app.use('/public',express.static(path.join(__dirname,'./mystatic'))); //public 代替了mystatic

//引入路由
const foodRouter = require('./router/foodRouter');
const userRouter = require('./router/userRouter');
//使用用户路由路径
app.use('/user',userRouter);
app.use('/food',foodRouter);

app.listen(3000,()=>{
    console.log('server start');
})