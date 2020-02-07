import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



import statistiques from './components/admin/statistiques.vue'

const routes = [

    { path: '/statistiques', component: statistiques },
 
  ]


const router = new VueRouter({
   routes , // Attention le " , " est obligatoire 
})