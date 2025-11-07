import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DonasiPage from '../views/DonasiPage.vue'
import AdopsiPage from '../views/AdopsiPage.vue'
import EdukasiPage from '../views/EdukasiPage.vue'

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/donasi', component: DonasiPage, name: 'Donasi' },
    { path: '/adopsi', component: AdopsiPage, name: 'Adopsi' },
    { path: '/edukasi', component: EdukasiPage, name: 'Edukasi' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router