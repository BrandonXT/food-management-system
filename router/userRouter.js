const express = require('express');
const router = express.Router();
const User = require('../db/model/userModel'); //导入数据模型以便使用数据的放法
const Mail = require('../utills/mail');

/**
 * @api {post} /user/reg  用户注册模块
 * @apiName 用户注册模块
 * @apiGroup User
 *
 * @apiParam {Spring} us 用户名
 * @apiParam {Spring} ps 密码
 * @apiParam {Spring} code 验证码
 *
 * @apiSuccess {json} firstname {err:0,msg:'注册成功'}
 * @apiSuccess {String} lastname  Lastname of the User.
 */
const codes ={}  ;//用于保存验证码

//注册逻辑
router.post('/reg',(req,res)=>{
    //获取数据
    let {us,ps,code}=req.body;
    //数据处理
    if(us&&ps&code){
        if(codes[us]!=code){return res.send({err:-4,msg:'验证码错误'})}

        //判断用户名是否存在
        User.find({us})
        .then((data)=>{
            if(data.length===0){
                return User.insertMany({us:us,ps:ps})
            }else{
                res.send({err:-3,msg:'用户名已存在'})
            }
        })
        .then(()=>{
            res.send({err:0,msg:'注册成功'})
        })
        .catch(()=>{
            res.send({err:-2,msg:'注册失败'})
        })
    }else{
        return res.send({err:-1,msg:'数据错误'});
    }
    console.log(us,ps);
    //返回数据
})


/**
 * @api {post} /user/login  用户登陆模块
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {Spring} us 用户名
 * @apiParam {Spring} ps 密码
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
//登陆逻辑
router.post('/login',(req,res)=>{
    //获取数据
    let {us,ps}=req.body;
    // console.log(us,ps);
    
    //数据处理
    User.find({us,ps})
    .then((data)=>{    //###此处寻找数据若找到则会返回数组，没找到会返回空数组
        if(data.length>0){ //数组大于0 证明找到了
            res.send({err:0,msg:'登陆成功'});
        }else{
            res.send({err:-2,msg:'用户名或密码不正确'});
        }
    })
    .catch(()=>{
        return res.send({err:-1,msg:'内部错误'});
    })
})

/**
 * @api {post} /user/mailsend  发送验证码
 * @apiName 发送验证码
 * @apiGroup User
 *
 * @apiParam {Spring} mail 邮箱
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
//设置发送邮箱接口（根据不同需求修改，例如手机验证码）
router.post('/mailsend',(req,res)=>{
    let {mail}=req.body;
    let code = parseInt(Math.random()*10000);
    Mail.send(mail,code)
    .then(()=>{
        codes[mail]=code;//保存键值对，mail是键，code是值
        res.send({err:0,msg:'发送成功'});
    })
    .catch((err)=>{
        res.send({err:-1,msg:'发送失败'});
    })
})


module.exports = router;