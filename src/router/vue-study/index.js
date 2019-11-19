import stydu_v_xx from '@/views/vue-study/v-xx.vue'
import stydu_v_model from '@/views/vue-study/v-model.vue'
import element_ui_study from '@/views/vue-study/element-ui-study.vue'

/**
 * Vue学习模块路由
 */
const routes = [
    {
        name: 'v-xx学习',
        path: '/vue-study/v-xx',
        component: stydu_v_xx
    },
    {
        name: 'v-model双向绑定学习',
        path: '/vue-study/v-model',
        component: stydu_v_model
    },
    {
        name: 'element-ui学习',
        path: '/vue-study/element-ui',
        component: element_ui_study
    }
]

export default routes;