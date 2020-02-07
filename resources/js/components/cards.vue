<template>     

       <!--
              d-flex : hadi ki dirha hight ta3 card ikoun kima layout ta3 les card li fieh hight kbira li houwa card 2

              grid-list-md : espace entre les cards

              display (sm...) :https://vuetifyjs.com/en/framework/display#display

              strucute doit etre : <v-container> >> <v-layout> >>  <v-flex> >> <v-card>

                <v-layout >: contien plusieurs flex c'est comment une <section />

               <v-flex> : une ou plusieur card c'est comme un bloque de card(s)

           -->
    
     <v-container fluid grid-list-md>

          <v-flex xs12 sm6>

               <v-text-field
                
                 solo
                 label="Search"
                 clearable
               >
               
                  <v-icon>search</v-icon>
                 
                 </v-text-field>

         
        </v-flex>
            
            <v-layout row wrap>

              

                     <!---------------- card 1  ------------------------>

                    <v-flex d-flex xs12 sm6 md4>
                       
                       <v-hover>
            
                           <v-card 
                               
                                slot-scope="{ hover }" 
                                :class="`elevation-${hover ? 12 : 2}`"
                                class="mx-auto"
                                width="344"
                                 >
          
                        
                             <v-img :aspect-ratio="16/9"  src="https://cdn.vuetifyjs.com/images/cards/kitchen.png" >
                                              
                              <v-expand-transition>

                                  <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-1 white--text"
                                    style="height: 100%;"
                                  >
                                    {{ lorem }}
                                  </div>
                             
                              </v-expand-transition>

                              </v-img>
                           
    
                           </v-card>

                       </v-hover>   
             
                     </v-flex>

                     <!---------------- card 2  ------------------------>

                     <v-flex d-flex xs12 sm6 md3>

                         <v-layout row wrap>

                             <!---------------- card 2 - A ------------------------>

                              <v-flex d-flex>

                                   <v-card color="red lighten-2">
                                        
                                         <v-card-title primary class="title">{{ lorem.slice(0, 70) }}</v-card-title>
                                   
                                   </v-card>
                              </v-flex>

                              <!---------------- card 2 - B ------------------------>

                               <v-flex d-flex>

                                  <v-card color="red lighten-2" dark>
      
                                    <v-card-title primary class="title">Lorem</v-card-title>
                                    <v-card-text> {{ lorem.slice(0, 70) }} </v-card-text>

                                  </v-card>
                                  
                              </v-flex>

                              <!---------------- card 2 - C ------------------------>

                               <v-flex d-flex>

                                  <v-card color="red lighten-2" dark>
      
                                    <v-card-title primary class="title">Lorem</v-card-title>
                                    <v-card-text> {{ lorem.slice(0, 70) }} </v-card-text>

                                  </v-card>
                                  
                              </v-flex>

                         </v-layout>

                     </v-flex>

                      
                     <!---------------- card 3  ------------------------>

                    <v-flex  xs12 sm6 md2>

                        <v-card color="green">
                               
                               <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>

                        </v-card>

                    </v-flex>
                       
               
                         
                     <!---------------- card 4  ------------------------>  

                     <v-flex d-flex xs12 sm6 md3>

                        <v-card color="blue">
                               
                               <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                               
                        </v-card>

                    </v-flex>
   
          
                    <!---------------- card 5  ------------------------>

                     <v-flex  xs12 sm6  offset-sm3>

                        <v-card dark >
                               
                               <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                               
                        </v-card>

                    </v-flex>


           </v-layout>

     </v-container>

</template>


<script>
export default {
      
      data() {

           return {
               
                      lorem :`Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus,
                       nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, 
                         mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos` ,

                          reviews: 413,
                        
                          value: 4.5

                        
           }
      }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
 
  font-size: 0.1em
}

.v-responsive__content {

      font-style: 0.5em  ;
}
</style>