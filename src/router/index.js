import { createRouter, createWebHistory} from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import JSON from '../components/JSON.vue'
import MyName from '../components/MyName.vue'

const routes = [
    { path:'/', component: HelloWorld},
    { path:'/json', component: JSON},
    { path: '/myname', component: MyName}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router