require('./bootstrap');


import Vue from 'vue'
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'


Vue.use(Vuetify)
Vue.use(VueMaterial)


Vue.component('simplenavbar', require('./components/simplenavbar.vue').default);


Vue.component('jumbotron', require('./components/jumbotron.vue').default);


Vue.component('navbar', require('./components/navbar.vue').default);

Vue.component('navdrawer', require('./components/navdrawer.vue').default);

//welcome page 

Vue.component('footertest', require('./components/footertest.vue').default);

//dashbord page 

Vue.component('test', require('./components/test.vue').default);


Vue.component('cards', require('./components/cards.vue').default);


Vue.component('carousels', require('./components/carousels.vue').default);


Vue.component('dialogtest', require('./components/dialogtest.vue').default);


Vue.component('notificationdrawer', require('./components/notificationdrawer.vue').default);

//Admin :


Vue.component('admin', require('./components/admin/layout.vue').default);


Vue.component('statistiques', require('./components/admin/statistiques.vue').default);


import 'babel-polyfill'


import VueRouter from 'vue-router'

Vue.use(VueRouter)


import statistiques from './components/admin/statistiques.vue'

import membres from './components/admin/membres.vue'

import historique from './components/admin/historique.vue'

import contact from './components/admin/contact.vue'

import rapport from './components/admin/rapport.vue'

import Messages from './components/admin/messages/messages.vue'

import Allmessages from './components/admin/messages/all-messages.vue'

import MessagesCorbeille from './components/admin/messages/messages-corbeille.vue'

import LireMessages from './components/admin/messages/messages-lire.vue'

import MessagesLus from './components/admin/messages/messages-lus.vue'

import MessagesNonLus from './components/admin/messages/messages-non-lus.vue'

    
const routes = [

       { path: '/Statistique', component: statistiques },
      
       { path: '/Membres', component: membres },
       
       { path: '/Historique', component: historique },
       
       { path: '/Contact', component: contact },
       
       { path: '/Rapport', component: rapport },



     
       //messages
  
       { 
           
         path: '/Messages', component: Messages , 
        
         children: [

            { path: '/Allmessages', component: Allmessages },
       
            { path: '/MessagesCorbeille', component: MessagesCorbeille },
            
            { path: '/LireMessages', component: LireMessages },
            
            { path: '/MessagesLus', component: MessagesLus },
            
            { path: '/MessagesNonLus', component: MessagesNonLus },

         ]
        
        },// Racine
      

]

const router = new VueRouter({
   routes , 

   

    // i can add this  mode: 'history' to dismiss hashtag but when i refresh
    // i will get page not found 
})

const app = new Vue({

    el: '#check' ,

    router
   
});

