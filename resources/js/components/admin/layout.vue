<template>
  <v-app
    id="inspire"
    light
  >

   <!-- ********************************* Drawer    ************************************* -->

    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>

            <v-list-tile v-for="item in items" :key="item.text" @click="">
          
                 <v-list-tile-action>
    
                     <v-icon>{{ item.icon }}</v-icon>
    
                 </v-list-tile-action>
    
   
                  <v-list-tile-content>
                    
                       <router-link :to="`/${ item.text }`">
    
                          <v-list-tile-title>
                        
                            {{ item.text }}  
                                                   
                          </v-list-tile-title>
                     
                       </router-link>  
    
                 </v-list-tile-content>

                 
    
            
    
    
          </v-list-tile>


            <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
    
            <v-list>
    
                 <v-list-tile v-for="item in items2" :key="item.text" avatar @click="">
    
                     <v-list-tile-avatar>
         
                       <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
         
                     </v-list-tile-avatar>
         
                       <v-list-tile-title v-text="item.text"></v-list-tile-title>
    
                  </v-list-tile>
    
            </v-list>
    
    
    
            <v-list-tile class="mt-3" @click="">
    
                 <v-list-tile-action>
    
                    <v-icon color="grey darken-1">add_circle_outline</v-icon>
    
                 </v-list-tile-action>
    
    
                 <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
    
    
            </v-list-tile>
    
            <v-list-tile @click="">
    
                  <v-list-tile-action>
        
                    <v-icon color="grey darken-1">settings</v-icon>
        
                  </v-list-tile-action>
    
                  <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
    
            </v-list-tile>


     </v-list>


    </v-navigation-drawer>

     <!-- *********************************  Toolbar   ************************************* -->

    <v-toolbar
      color="red"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Youtube</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>


     <!-- *********************************  Content   ************************************* -->

    <v-content >

    <!--fill-height : elel ajout height:100% et elle applique pour v-layout des classes pour centrer le contenu -->
    
        <v-container >

            <router-view> </router-view>
     

        </v-container>

    </v-content>




  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { icon: 'trending_up', text: 'Statistique' },
        { icon: 'subscriptions', text: 'Membres' },
        { icon: 'history', text: 'Historique' },
        { icon: 'featured_play_list', text: 'Contact' },
        { icon: 'watch_later', text: 'Rapport' } ,
        { icon: 'message', text: 'Messages' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>