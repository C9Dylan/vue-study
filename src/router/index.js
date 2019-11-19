/**
 * 使路由生效的必做事项: 导入vue对象并注入路由
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import productRouter from './product'
import vueStudyRouter from './vue-study'
import index from '@/views/index'

const routes = [
    // 访问域名默认跳转至首页
    {
        name: '',
        path: '/',
        redirect: "/index"
    },
    {
        name: '首页',
        path: '/index',
        component: index
    }
].concat(
    productRouter,
    vueStudyRouter
)

export default new Router({ routes })