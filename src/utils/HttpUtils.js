import axios from 'axios'
import * as Objects from '@/utils/Objects.js'

/**
 *  请求方式常量池
 */
const REQUEST_METHOD = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']

/**
 *  Post提交
 */ 
export function post(headers = {}, url, data = {}) {
    // 1. 初始化基础请求参数
    let requestConfig = {
        method: REQUEST_METHOD[1],
        url: url,
        data: data,
        headers: headers
    }
    axios(requestConfig).then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    });
    // axios.post(url, data).then((response) => {
    //         console.log(response.data);
    //         console.log(response.status);
    //         console.log(response.statusText);
    //         console.log(response.headers);
    //         console.log(response.config);
    // });
}