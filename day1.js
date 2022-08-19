console.log("hello node.js")


// fs文件系统模块
const fs = require('fs');
fs.readFile('read-write.txt','utf-8',function(err,dataStr){
    // 打印失败的结果
    // 读取成功，err 为 null
    // 读取失败，dataStr为 undefined ，err为错误对象
    console.log(err);
    console.log('------------');
    // 打印成功的结果
    console.log(dataStr);
})

// 判断文件是否读取失败
fs.readFile('read-write111.txt','utf-8',function(err,dataStr){
    if(err) {
        return console.log(err.message);
    } else {
        return console.log(dataStr);
    }
})


// 写入文件，会清空原有文件内容
// 没有文件，则会新建
fs.writeFile('read-write.txt','bfhjadsbkf',function(err){
    // 写入成功，err为null
    console.log('写入结果',err);
})

// 练习，将文档中内容竖着排列
let str = '';
fs.readFile('read-write-exercise.txt','utf-8',function(err,dataStr){
    if(err) {
        return console.log(err.message);
    } else {
        str = dataStr;
        console.log('str----',str);
        fs.writeFile('read-write-exercise.txt',str.split(' ').join('\r\n'),function(err){
            // 写入成功，err为null
            console.log('写入结果',err);
        })
    }
})
