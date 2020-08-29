import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home'
import test from '../components/test'
import Footer from '@/components/footer.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            components: {footer : 'Footer',default:'HelloWorld'}
        },
        {
            path:'/test',
            name: 'test',
            component: test
        }
    ]
})
