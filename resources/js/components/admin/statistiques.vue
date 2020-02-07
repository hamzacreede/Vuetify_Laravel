<template>

  <!--
      
       auto-draw : animation 
       
       value : commentaire en bas

       labels: par example : setembre ....decembre
  
  -->

  <v-card
    class="mt-3 mx-auto"
    max-width="950"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
     
    >

    
          <div class="caption grey--text text-uppercase" color="white">
            Heart rate
          </div>
          <div>
           
            <strong >BPM</strong>
          </div>
   


      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="26"
         auto-draw
         :auto-draw-duration="4000"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">

      <div class="title font-weight-light mb-3 " style="margin-top:5%">

          
         <v-container >

                    <h3> Année : {{year}}  </h3> 

           <v-flex lg12 xs12  sm12 d-flex  wrap>


                  <v-autocomplete
                   v-model="year"
                   
                   :items="Years"   
                   color="lighten-2"
                   label="Selectionner l'Année"
                   item-text="name"
                   item-value="name"
                   
                 >

                 </v-autocomplete>

              
           </v-flex>

       </v-container>
    
      </div>
    
      <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data: () => ({

      year : '' ,

      Years : ['2018','2019','2020','2021','2022','2023','2024','2025',],
      
      labels: [                   
        'jan',
        'fév',
        'mars',
        'avr',
        'mail',
        'juin',
        'juil',
        'aout',
        'sept',
        'oct',
        'nov',
        'déce'

      ],

      //ceci est les valeur de base de statistique par exemple nomre de visite pour septembre est : 500 ...etc
      value: [
        50,
        0,
        5,
        15,
        10,
        50,
        -5,
         0,
        50,
        -5,
         0,
        50,
        
      ]
    }) ,

    watch : {

         year(){

              // ici je vais faire la methode pour changer les donnée "value"
         }
    }
  }
</script>

<style>

  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>

