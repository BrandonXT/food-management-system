define({ "api": [
  {
    "type": "post",
    "url": "/food/add",
    "title": "食品添加模块",
    "name": "______",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "name",
            "description": "<p>名字</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "desc",
            "description": "<p>介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "typename",
            "description": "<p>食品类名</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "typeid",
            "description": "<p>类名id</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "img",
            "description": "<p>食品图片</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "firstname",
            "description": "<p>{code:200,msg:'添加成功'}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/del",
    "title": "删除模块",
    "name": "del",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "_id",
            "description": "<p>id号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "firstname",
            "description": "<p>{code:200,msg:'查询成功'}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/del",
    "title": "修改模块",
    "name": "del",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "_id",
            "description": "<p>id号</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "name",
            "description": "<p>名字</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "desc",
            "description": "<p>介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "typename",
            "description": "<p>食品类名</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "typeid",
            "description": "<p>类名id</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "img",
            "description": "<p>食品图片</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "firstname",
            "description": "<p>{code:200,msg:'查询成功'}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/getInfoByPage",
    "title": "关键字查询模块",
    "name": "getInfoByPage",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页的数据条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>第几页</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "firstname",
            "description": "<p>{code:200,msg:'查询成功'}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/getInfoByType",
    "title": "食品分类查询模块",
    "name": "getInfoByType",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "typeid",
            "description": "<p>类名id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "firstname",
            "description": "<p>{code:200,msg:'查询成功'}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/getInfoBykw",
    "title": "关键字查询模块",
    "name": "getInfoBykw",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "firstname",
            "description": "<p>{code:200,msg:'查询成功'}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/user/mailsend",
    "title": "发送验证码",
    "name": "_____",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "mail",
            "description": "<p>邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reg",
    "title": "用户注册模块",
    "name": "______",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "ps",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "firstname",
            "description": "<p>{err:0,msg:'注册成功'}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登陆模块",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "ps",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "User"
  }
] });
