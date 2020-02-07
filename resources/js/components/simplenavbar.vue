



<template>


    <v-app >

          <!-- ***** ***** ***** ***** *****  DRAWER : 

           class="hidden-md-and-up"   : i use this for show drawer only for small ViewPort

           disable-resize-watcher : if i Delete it and i change resize to > 1280 the content of the page will 
                                    Automaticly changed here size
        
         ***** ***** ***** ***** ***** -->
           <v-navigation-drawer
                     v-model="drawer"
                     fixed
                     clipped
                     app         
                        
                     class="hidden-md-and-up"

                     disable-resize-watcher
            >

           <v-list dense >

                <v-list-tile v-for="item in items" :key="item.text" @click="">
   
                  <v-list-tile-action>

                    <v-icon>{{ item.icon }}</v-icon>

                  </v-list-tile-action>
   
                  <v-list-tile-content>
   
                      <v-list-tile-title >
                        {{ item.text }}
                      </v-list-tile-title>

                  </v-list-tile-content>
                  
   
                </v-list-tile>



                <v-subheader>Notifications</v-subheader>

                <notificationdrawer></notificationdrawer>


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

        <!-- ***** ***** ***** ***** *****  Simple NAVBAR :  ***** ***** ***** ***** ***** -->

         <v-toolbar app clipped-right flat extension-height="900" >

               <v-toolbar-side-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>

               <v-toolbar-title>FastWorking</v-toolbar-title>

               <v-spacer></v-spacer>


               <v-toolbar-items class="hidden-sm-and-down"> 
 
                     
                       <v-btn flat>Page One</v-btn>
                       <v-btn flat>Page Two</v-btn>

                       <v-btn color="error">Error</v-btn>


               </v-toolbar-items>
           
         </v-toolbar>


         <v-content>

               <jumbotron></jumbotron>
               
         </v-content>
  
    </v-app>

</template>



<script>
export default {
    
    data() {

          return {

               menuItems : ['Welcome','Contact','Page2'] ,
              
               drawer: false ,

               items: [

                     { icon: 'trending_up', text: 'Most Popular' },
                     { icon: 'subscriptions', text: 'Subscriptions' },

                     { icon: 'email' },

                     
                   
                
                 ],

               items2: [
                 { picture: 28, text: 'Joseph' },
                 { picture: 38, text: 'Apple' },
              
                ] ,

               

          }
    } , 
 

    methods : {

     
    }

}
</script>


<style>
  
  /* Attention si j'applique ce style tt les navabr dans les autres dossier vont changer sont style i lfaut

    utilsier un id
  
  .theme--light.v-toolbar {
          
            
     background-color: transparent !important;


  }

  .v-toolbar--fixed {

     position: relative !important;
   
  }  */
  
</style>


