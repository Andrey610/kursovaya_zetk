import Vue from 'vue'
import VueRouter from 'vue-router'
import wysiwyg from 'vue-wysiwyg'

import App from './Components/App.vue'
import AlbumInfo from './Components/AlbumInfo.vue'
import AlbumList from './Components/AlbumList.vue'
import reclame from './Components/reclame.vue'
//import CardList from './components/CardList.vue'
import store from './store.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(wysiwyg, {}); // config is optional. more below

const routes = [
    { path: '/', component: AlbumList },
    { path: '/tasks/:id', component: AlbumInfo, props:true },
    { path: '/reclame', component: reclame }
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    el: '#app',
    router,
    store
})
