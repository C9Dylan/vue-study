import productList from '@/views/product/productList'

/**
 * 商品模块路由
 */
const routes = [
    {
        name: '商品列表',
        path: '/product/list',
        component: productList
    },
    {
        name: '商品新增',
        path: '/product/add'
    },
    {
        name: '商品修改',
        path: '/product/update'
    },
    {
        name: '商品删除',
        path: '/product/update'
    }
]

export default routes;