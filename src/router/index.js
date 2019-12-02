import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/views/Index.vue"
import Library from "@/views/Library"
import Playlist from "@/views/Playlist"
import Groups from "@/views/Groups"
import Login from "@/views/Login"
import Register from "@/views/Register"
import Moment from "@/views/Moment"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    }, {
        path: '/library',
        name: 'library',
        component: Library
    }, {
        path: '/playlist',
        name: 'playlist',
        component: Playlist
    }, {
        path: '/groups',
        name: 'groups',
        component: Groups
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/register',
        name: 'register',
        component: Register
    }, {
        path: '/moment',
        name: 'moment',
        component: Moment
    }
]

const router = new VueRouter({
  routes
})

export default router
