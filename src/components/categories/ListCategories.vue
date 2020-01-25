<template>
<v-flex xs12>
  <v-card>
      <v-card-title primary-title>
    <span class="title" >Categories Page</span>
     <v-spacer></v-spacer>
     <span>
         <v-btn color="info" :to="{name: 'CreateCategories'}">Add Categories </v-btn>

         
     </span>
      </v-card-title>
      </v-card>
    <v-divider>

    </v-divider>
    <v-card>

    <v-card-title>
            Categories Table
            <v-spacer></v-spacer>
            <v-text-field v-model="search" icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="categories"
            :items-per-page="5"
            class="elevation-1"
            :search="search"
            
          >
          <template v-slot:item.action="{item}" >
                <v-icon color="success" @click="editCategory(item)">{{ icons.mdiPencil }}</v-icon>
              <v-icon left color="error" @click="DeleteCategory(item.idcategories)">{{ icons.mdiDelete }}</v-icon>
            </template>
            </v-data-table>
        
  </v-card>
  </v-flex>
</template>


<script>
 import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'
  export default {
    data () {     
      return {
        search: '',
        icons: {
             mdiAccount,
             mdiPencil,
             mdiShareVariant,
             mdiDelete,
            },
         headers: [{
            // id: 'id',
            align: 'center',
            sortable: true,
            // value: 'idcustomers'
          },
          {
            text: 'id',
            value: 'idcategories'
          },
          {
            text: 'Name',
            value: 'nama'
          },
          {
            text: 'Description',
            value: 'deskripsi'
          },
          {
            text: 'Action',
            value: 'action'
          }
        ]
      }     
    },
    computed: {
      categories() {
        return this.$store.state.Categories.categories
      }
    },
    mounted () {
     this.$store.dispatch('fetchcategories')// DISPATCH loadCustomer YANG BERADA DALAM MODULE Customers
    // store.dispatch('')
   
  },
  methods:{
   editCategory(item) {
     this.$router.push({name: 'updatecategories',
      params:{
      idcategories: item.idcategories,
      nama:item.nama,
      deskripsi:item.deskripsi
      }})
   },

     DeleteCategory(idcategories){
        this.$store.dispatch('DeleteCategories', idcategories)
        alert('Category deleted !!!')
   }
  }
  
 

  }
        
  
</script>

<style>

</style>