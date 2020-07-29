/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

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

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode : 'history'
})

initialize(store,router);
const app = new Vue({
    el: '#admin',
    router,
    store,
    vuetify : new Vuetify(),
    components : {
        MainApp
    },
});
