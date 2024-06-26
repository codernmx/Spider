const port = 4000  //项目的端口
const fileUrl = `http://127.0.0.1:${port}/`  //文件访问路径
const database = 'webadmin' //数据库名称
const user = 'root' //数据库用户名
const password = '1111' //数据库密码
const host = '127.0.0.1' //数据库服务器的IP地址或
const dbPort = 3306  //数据库端口
const options = {
	host, //数据库服务器的IP地址或域名
	port: dbPort, //数据库使用的端口号。MySQL数据库的默认端口号是3306
	dialect: 'mysql',//数据库的类型
	pool: { //数据库连接池：放若干个数据库的连接对象，提高数据库的访问效率
		max: 20, //数据库连接池中连接对象的最大个数
		min: 20, //数据库连接池中连接对象的最少个数
		idle: 20000 //等待延迟的时间，单位是毫秒
	},
	logging: false, //是否开启 sql 日志
	timezone: '+08:00',//东八时区
	define: {
		timestamps: false, // 关键配置，默认为 true， 修改为 false 即可
		'charset': 'utf8' //处理Mysql中中文字符问题
	},
	dialectOptions: {
		dateStrings: true, //处理时间格式问题
		typeCast: true //处理时间格式问题
	}
}
// 小程序相关配置
const WEAPP_APP_ID = ''   //小程序appid
const WEAPP_APP_SECRET = '' //小程序秘钥


module.exports = {
	fileUrl,
	options,
	database,
	user,
	password,
	host,
	port,
	WEAPP_APP_ID,
	WEAPP_APP_SECRET
}
