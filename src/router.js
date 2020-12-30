import vueRouter from 'vue-router'


import Price from './components/Price'
import App from './App'


const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/price',
                name: "user_price",
                component: Price
            },
        ]
    })



export default router