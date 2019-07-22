const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1902', { useNewUrlParser: true });
// 连接本地数据库
var db = mongoose.connection;  //数据库连接的对象
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('db ok');

});
