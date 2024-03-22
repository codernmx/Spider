/*
 * @Date: 2024-03-20 12:56:33
 * @LastEditTime: 2024-03-20 13:00:12
 */

const axios = require('axios');
const { success, fail, uuid } = require('./utils');
const { literal, Op, Sequelize } = require("sequelize");
const initModels = require('./models/init-models')
const { Articles } = initModels(require('./utils/sequelize'))



async function getData () {
    try {
        const res = await axios.post('http://www.beltandroad-skills.cn/api/user/article_list', {
            page: 1,
            pageSize: 50
        })
        const result = await Articles.bulkCreate(res.data.data.list, { ignoreDuplicates: true })
    } catch (error) {
        console.log(error);
    }
}


getData().then(res=>{
    console.log(res,'res');
}).catch(err=>{
    console.log(err);
})