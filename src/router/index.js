import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/views/Index.vue"
import Library from "@/views/Library"
import Playlist from "@/views/Playlist";

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
    }
]

const router = new VueRouter({
  routes
})

export default router
