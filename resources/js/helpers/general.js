import Axios from "axios";

export function initialize(store,router){
    router.beforeEach((to, from, next) => {
        const requireAuth = to.matched.some(record=> record.meta.requireAuth)
        const currentUser = store.state.currentUser;

        if (requireAuth && !currentUser){
            next('/admin/login');
        }else if(to.path == '/admin/login' && currentUser){
         next('/admin/home')
        } else{
            next()
        }
     });
     axios.interceptors.response.use(null,(error)=>{
         if (error.response == 401){
             store.commit('logout');
             router.push('/admin/login')
         }
         return Promise.reject(error);
     });
     if(store.getters.currentUser){
         setAutorization(store.getters.currentUser.token)
     }
 }
 export function setAutorization(token){
     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
 }
