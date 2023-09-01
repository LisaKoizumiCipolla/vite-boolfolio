import { createRouter, createWebHistory } from "vue-router";


import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import Posts from './pages/Posts.vue';
import PostShow from './pages/PostShow.vue';


const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name : 'homepage',
            component : HomePage,
        },
        {
            path: '/about-us',
            name : 'about',
            component : AboutUs,
        },
        {
            path: '/posts',
            name : 'posts.index',
            component : Posts,
        },
        {
            path: '/posts/:id',
            name : 'posts.show',
            component : PostShow,
        },
    ]
})

export { router };