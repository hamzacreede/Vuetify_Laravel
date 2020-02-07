<template>


   <div>

     

           <v-select
                   label="Recherche Par Email ..."
                   :items="Emails"
                   v-model="selectedEmail"
                   item-text="nome"
                   item-value="id"
                   autocomplete
                
                   clear-icon
                   clearable
                   box

          >
            </v-select>


    
      <v-card >

          <v-list lg12 two-line>
            <template v-for="(Messages, index) in ListeMessages">
              <v-list-tile
                :key="Messages.title"
                avatar
                ripple
               
              >
                <v-list-tile-content  >
                  <v-list-tile-title>{{ Messages.title }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ Messages.headline }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ Messages.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
  
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ Messages.action }}</v-list-tile-action-text>
                  <v-icon
                    v-if="selected.indexOf(index) < 0"
                    color="grey lighten-1"
                  >
                    star_border
                  </v-icon>
  
                  <v-icon
                    v-else
                    color="yellow darken-2"
                  >
                    star
                  </v-icon>
                </v-list-tile-action>
  
              </v-list-tile>
              <v-divider
                v-if="index + 1 < ListeMessages.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list>
        </v-card>
        
    </div>
  </div>
      


</template>


<script>
export default {
 name: 'AutocompleteBox',
      
      data() {

             return {

                selected: [2],

                selectedEmail: '',

                Emails: [
          
                  'emaile1@hotmail.fr',
                  'emaile2@hotmail.fr',
                  'emaile3@hotmail.fr',
              
                 ],

               
                ListeMessages: [
                  {
                    action: '15 min',
                     headline: 'Summer BBQ',
                    title: 'me, Scrott, Jennifer',
                    subtitle: "Wish I could come, but I'm out of town this weekend."
                  
                  },
                  {
                    action: '2 hr',
                    headline: 'Summer BBQ',
                    title: 'me, Scrott, Jennifer',
                    subtitle: "Wish I could come, but I'm out of town this weekend."
                  },
                  {
                    action: '6 hr',
                    headline: 'Oui oui',
                    title: 'Sandra Adams',
                    subtitle: 'Do you have Paris recommendations? Have you ever been?'
                  },
                  {
                    action: '12 hr',
                    headline: 'Birthday gift',
                    title: 'Trevor Hansen',
                    subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
                  },
                  {
                    action: '18hr',
                    headline: 'Recipe to try',
                    title: 'Britta Holt',
                    subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
                  }
                ]

             }
             
      } ,

      watch : {

            selectedEmail(){

               alert(this.selectedEmail) ;

               if(this.selectedEmail == "" ) alert(this.selectedEmail) ;
            }
      },

      methods :{

         getCountries(){

              //@md-changed="getCountries" @md-opened="getCountries"
         }
      }

      
}
</script>

<style lang="scss" scoped>
  .search {
    max-width: 500px;
  }
</style>