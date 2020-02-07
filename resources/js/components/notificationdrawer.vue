<template>

    <div>
          
      <!-- Here i Made a concatination betwen panel and Dividers -->

      <v-expansion-panel
      
        expand 
                         
      >
        <v-expansion-panel-content>
         
        
          <template v-slot:header>

            <div>Item</div> 

          </template>

          <!-- I Replaced  v-card with v-lis to make this concatination-->

         <v-list two-line>
          

            <template v-for="(item, index) in items">

              <!-- -->

              <v-list-tile :key="index" avatar ripple @click="">

                <!-- title + headline (where i can add the name of who send the notification) and
                
                
                 sub title (where can i add the message or the pub where caused this notification  ) -->

                <v-list-tile-content>

                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>

                  <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>

                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>

                </v-list-tile-content>




                <!-- Ici c'est le temps depuis l'ajout de notification avec un icon
                     Donc normalement ici je peut ajouté delete...etc
                -->


                <v-list-tile-action>

                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>

                  <v-icon color="grey lighten-1">star_border</v-icon>

                </v-list-tile-action>

              </v-list-tile>

              <!-- -->

              <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>

            </template>

          </v-list>


        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>

</template>


<script>
export default {
     
     data () {

          return {

           
       items: [

          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in"+
            "your neighborhood doing errands this weekend. Do you want to hang out?"}, 

            { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in"+
            "your neighborhood doing errands this weekend. Do you want to hang out?"}, 

            { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in"+
            "your neighborhood doing errands this weekend. Do you want to hang out?"}, 

            { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in"+
            "your neighborhood doing errands this weekend. Do you want to hang out?"}, 

            { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in"+
            "your neighborhood doing errands this weekend. Do you want to hang out?"}, 
            
         

          ]
         
    }
     }
}
</script>
