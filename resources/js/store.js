import {getLocalUser} from './helpers/auth';
import Vue from 'vue'
import Vuex from 'vuex'
const user = getLocalUser();
Vue.use(Vuex)

export default new Vuex.Store ({
    state:{
        currentUser : user,
        auth_error : null,
        posts:[],
    },
    getters:{
        currentUser(state){
            return state.currentUser;
        },
        posts(state){
            return state.posts;
        }

    },
    mutations:{
        login(state){
            state.auth_error = null
        },
        loginSuccess(state,payload){
            state.currentUser = Object.assign({},payload.user,{token:payload.access_token});
            localStorage.setItem('user', JSON.stringify(state.currentUser))
        },
        loginFailed(state,payload){
            state.auth_error = payload.error;
        },
        logout(state){
            localStorage.removeItem('user')
            state.currentUser=null
        },
        updatePosts(state,payload){
            state.posts = payload;
        }
    },
    actions:{
        login(context){
            context.commit('login')
        },
        getPosts(context){
            axios.get('/api/posts')
            .then((result) => {
                context.commit('updatePosts',result.data.posts)
            }).catch((err) => {
                if (err.response.status == 401) {
                    context.commit('logout');
                    router.push('/admin/login');
                }
            });
        }
    }
})
