/**
 * 导入规则:
 *      1. 如果from路径下只有一个文件, 默认会去找该路径下的index.js. 若该唯一文件名称非index.js, 则导入失败.
 *      2. 也可以指定性的导入文件, 即文件的完整路径
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// 引入Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入axios库
import axios from 'axios'

Vue.use(ElementUI)
Vue.use(axios)

Vue.config.productionTip = false

new Vue({
  /**
   * 1. 映射绑定到index.html中的id为'#app'的标签中
   */
  el: '#app',
  /**
   * 2. 路由器: 根据跳转路径, 加载不同的组件对象, 并替换已经加载的App对象. 实现页面不大刷新的同时改变页面数据.
   */
  router,
  /**
   * 3. 导入组件: 根目录中的Vue对象只能引入一个入口组件.
   */
  components: { App },
  /**
   * 4. 理解为App填充'#app'后的外标签名. 名称值并不限定, 都可以.
   */
  template: '<App/>'
})


export default {
  /**
   * import main from '@/main.js'
   * 
   * 默认导出: 其他文件中的main指向的即main.js中export default 中的对象: data() {}.
   * 
   * 且本页面中使用this, 指向的也是该对象: date() {}.
   */
  data() {
    return {
      
    }
  },
  /**
   * 提供给本页面调用的函数
   */
  methods: {

  }
}

export const AppName = 'kim-vue-study'

export function log(str) {
  console.log(str)
}