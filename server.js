const express = require('express');
const db = require('./db/connect');
const bodyparser = require('body-parser'); //处理post请求的body数据
const path = require('path');
const cors = require('cors');

const app = express();
//cors 解决跨域问题
app.use(cors());
//解析表单数据 x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));
//解析json数据
app.use(bodyparser.json());

//引入静态资源库
app.use('/public',express.static(path.join(__dirname,'./mystatic'))); //public 代替了mystatic

//引入路由
const foodRouter = require('./router/foodRouter');
const userRouter = require('./router/userRouter');
const fileRouter = require('./router/fileRouter');
//使用用户路由路径
app.use('/user',userRouter);
app.use('/food',foodRouter);
app.use('/file',fileRouter);

app.listen(3000,()=>{
    console.log('server start');
})