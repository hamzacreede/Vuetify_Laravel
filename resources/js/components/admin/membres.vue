<template>

 <!-- 
        hide-actions : to hide input select where we can sho only a some data

        :headers="headers" : is the liste of item on head (calories...)

        :items="desserts" : is the liste of items on body

   
     -->
      <div id="app">
  <v-app id="inspire">
    <div>
      <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
                  
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
      
      <v-data-table
                    
          :loading="true"
         search="search"
        :headers="headers"
        :items="desserts"
        
        hide-actions
        :pagination.sync="pagination"
        class="elevation-1"
      >
        <template v-slot:items="props">

          

          <router-link :to="`/${ props.item.name }`">  <td>{{ props.item.name }}</td> </router-link>

          <td class="text-xs-right">{{ props.item.calories }}</td>

          <td class="text-xs-right">{{ props.item.fat }}</td>

          <td class="text-xs-right">{{ props.item.carbs }}</td>

          <td class="text-xs-right">{{ props.item.protein }}</td>

          <td class="text-xs-right">{{ props.item.iron }}</td>

          

        </template>

        <template v-slot:no-data>
      <v-alert :value="true" color="error" icon="warning">
        Sorry, nothing to display here :(
      </v-alert>
    </template>

      </v-data-table>
      <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </div>
  </v-app>
</div>
</template>

<script>
export default {
      
       data () {
    return {
      search: '',
      pagination: {},
      selected: [],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  }
}
</script>
