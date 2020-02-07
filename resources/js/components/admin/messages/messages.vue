<template>
    
      <v-tabs
           centered
           
           icons-and-text
         >
    
    <v-tabs-slider color="yellow"></v-tabs-slider>
    
 
    <v-tab href="#tab-3">

            <router-link to="/MessagesCorbeille"> Corbeille  </router-link>  
 
            <v-icon>account_box</v-icon>
    
    </v-tab>


    <v-tab href="#tab-2">

       <router-link to="/MessagesLus"> Messages Lus  </router-link>  

       <v-icon>favorite</v-icon>

    </v-tab>

    <v-tab href="#tab-3">

            <router-link to="/MessagesNonLus"> Messages Non Lus  </router-link>  
 
            <v-icon>account_box</v-icon>
    
    </v-tab>

    <v-tabs-items>


                  <router-view></router-view>


     
   </v-tabs-items>
  
  </v-tabs>

</template>
