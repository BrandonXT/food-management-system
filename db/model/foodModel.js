//连接mango数据库
const mongoose = require('mongoose');

//scheme 对象
//创建一个和集合相关的scheme对象，类似表头
var Scheme = mongoose.Schema;
var foodSchemem = new Scheme({
    name : {type:String,required:true}, //require:true 表示是必须的
    price :{type:String,required:true},
    desc:{type:String,required:true},
    typename:{type:String,required:true},
    typeid:{type:Number,required:true},
    img:{type:String,required:true},
});
//将scheme对象转化为数据模型   ###所有的方法都是基于这个数据模型的
var Food = mongoose.model('foods',foodSchemem);//该数据对象和数据集合关联（‘集合名’，Scheme对象）

//将做好的数据模型抛出
module.exports=Food;