"use strict";
const nodemailer = require("nodemailer");

//创建发送邮件对象
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com", //发送方邮箱
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "1499672553@qq.com", //  发送方的邮箱地址
        pass: 'spzzjehbrmtxjfgg' // smtp 验证码
    }
});

function send(email, code) {
    //邮件信息
    let mailobj = {
        from: '"Fred Foo 👻" <1499672553@qq.com>', // sender address
        to: email, // list of receivers
        subject: "验证码", // Subject line
        // text: "今天又变帅了", // plain text body
        html: `<b>您的验证码是${code}</b>` // html body
    };
    //异步判断
    return new Promise((reslove, reject) => {
        //发送邮件
        transporter.sendMail(mailobj, (err, data) => {
            if (err) {
                reject();
            } else {
                reslove();
            }
        });
    });
}
//将对象抛出
module.exports = {
    send
};