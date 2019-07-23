const express = require('express');
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({  //配置信息
    destination:function(req,file,cb){
        //指定保存文件夹路径
        cb(null,'./mystatic/img');
    },
    filename:function(req,file,cb){
        //指定文件的名字
        let ext = file.originalname.split('.')[1]; //取文件后缀
        let tmpname=(new Date()).getTime()+(parseInt(Math.random()*9999));  //文件名防止重复
        cb(null,`${tmpname}.${ext}`);     //若不设置就不会加文件后缀格式
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
        let url = `public/img/${req.file.filename}`; //拼接图片地址
        res.send({code:200,msg:'上传成功',img:url});
    }
});


module.exports = router;