/*
 * @Date: 2023-08-20 17:46:09
 * @LastEditTime: 2024-01-15 14:37:39
 */

//1.导入Sequelize模块
const Sequelize = require('sequelize')
const { database, user, password, options } = require('../config/index')

//new Sequelize('数据库名','用户名','密码',{配置信息})
//2.使用sequelize模块配置和数据库的连接信息：创建连接数据库的对象
const mysql_Sequelize = new Sequelize(database, user, password, options)
//3.导出数据库的连接对象
module.exports = mysql_Sequelize;
