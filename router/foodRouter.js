const express = require('express');
const router = express.Router();
const Food = require('../db/model/foodModel'); //操作食品数据模型

/**
 * @api {post} /food/add  食品添加模块
 * @apiName 食品添加模块
 * @apiGroup Food
 *
 * @apiParam {Spring} name 名字
 * @apiParam {Spring} price 价格
 * @apiParam {Spring} desc 介绍
 * @apiParam {Spring} typename 食品类名
 * @apiParam {Spring} typeid 类名id
 * @apiParam {Spring} img 食品图片
 *
 * @apiSuccess {json} firstname {code:200,msg:'添加成功'}
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/add',(req,res)=>{
    let {name,price,desc,typename,typeid,img}=req.body;
    if(name&&price&&desc&&typename&&typeid&&img){
        Food.find({name})
        .then((data)=>{
            if(data.length===0){  //该食物不存在
                return Food.insertMany({name,price,desc,typename,typeid,img});
            }else{
                res.send('该食物已存在');
            }
        })
        .then((data)=>{
            res.send({code:200,msg:'添加成功'});
        })
        .catch(()=>{
            res.send({code:199,msg:'添加失败'});
        })
    }else{
        return res.send({err:-1,msg:'数据错误'});
    }
})

/**
 * @api {post} /food/getInfoByType  食品分类查询模块
 * @apiName 食品查询模块
 * @apiGroup Food
 *
 * @apiParam {Spring} typeid 类名id
 *
 * @apiSuccess {json} firstname {code:200,msg:'查询成功'}
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/getInfoByType',(req,res)=>{
    let {typeid}=req.body;
    Food.find({typeid})
    .then((data)=>{   //find 的返回值是个数组，每个元素是个数据对象
        res.send({code:200,msg:'查询成功',list:data});
    })
})

/**
 * @api {post} /food/getInfoByType  食品分类查询模块
 * @apiName 食品查询模块
 * @apiGroup Food
 *
 * @apiParam {Spring} typeid 类名id
 *
 * @apiSuccess {json} firstname {code:200,msg:'查询成功'}
 * @apiSuccess {String} lastname  Lastname of the User.
 */





module.exports = router;