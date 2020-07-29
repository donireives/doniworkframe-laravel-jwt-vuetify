import Login from './components/Login.vue';
import Home from './components/Home.vue';

export const routes = [
    {
        path: '/admin/login',
        component : Login,
    },
    {
        path : '/admin/home',
        component : Home,
        meta:{
            requireAuth : true
        }
    }
]
