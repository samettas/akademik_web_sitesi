import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'



// views
import Anasayfa from '../views/bölüm/Anasayfa.vue'
import egitim from '../views/bölüm/egitim.vue'
import Arastirma from '../views/bölüm/Arastirma.vue'
import Basarilar from '../views/bölüm/Basarilar.vue'
import idari from '../views/bölüm/idari.vue'
import Proje from '../views/bölüm/Proje.vue'
import Yayinlar from '../views/bölüm/Yayinlar.vue'

const routes = [
  
  {
    path: '/',
    name: 'Anasayfa',
    component: Anasayfa,
  },
  {
    path: '/egitim',
    name: 'egitim',
    component: egitim
  },
  {
    path: '/Arastirma',
    name: 'Arastirma',
    component: Arastirma
  },
  {
    path: '/Basarilar',
    name: 'Basarilar',
    component: Basarilar
  },
  {
    path: '/idari',
    name: 'idari',
    component: idari
  },
  {
    path: '/Proje',
    name: 'Proje',
    component: Proje
  },
  {
    path: '/Yayinlar',
    name: 'Yayinlar',
    component: Yayinlar
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
