const express = require('express');
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({  //配置信息
    destination:function(req,file,cb){
        //指定保存文件夹路径
        cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        //指定文件的名字
        cb(null,'aaa.jpg');     //若不设置就不会加文件后缀格式
    }
});

//创建一个uploads文件夹存放保存的文件
// var upload = multer({dest:'uploads/'})  （简单写法）
var upload = multer({
    storage:storage
});

router.post('/upload',upload.single('hehe'),(req,res)=>{
    console.log(req.file);
    let {mimetype,size,path}=req.file;   //获取上传的文件的信息
    let types = ['jpg','jpeg','png','gif'];   //允许上传的数据类型
    let tmpType = mimetype.split('/')[1];  //获取上传文件的类型
    if(size>50000){
        return res.send({code:199,msg:'文件尺寸过大'});
    }else if(types.indexOf(tmpType)==-1){
        return res.send({code:198,msg:'文件类型错误'});
    }else{
        res.send({code:200,msg:'上传成功'});
    }
});


module.exports = router;