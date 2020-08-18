
require('./bootstrap');

import Vue from 'vue';
window.Vue = require('vue');
import Vuetify from 'vuetify';
import MainApp from './components/MainApp.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import store from './store';
import {initialize} from './helpers/general';
import { Form, HasError, AlertError } from 'vform'
window.Form = Form

import Swal from 'sweetalert2';

// CommonJS
window.Swal = require('sweetalert2')


Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode : 'history'
})

initialize(store,router);
window.Fire = new Vue()
const app = new Vue({
    el: '#admin',
    router,
    store,
    vuetify : new Vuetify(),
    components : {
        MainApp
    },
});
