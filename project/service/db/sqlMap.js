// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into goods(name, price) values (?, ?)',
    select: 'select * from goods'
  }
}
module.exports = sqlMap;
