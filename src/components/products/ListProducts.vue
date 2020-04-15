<template>
<v-flex xs12>
  <v-card>
      <v-card-title primary-title>
    <span class="title" >Products Page</span>
     <v-spacer></v-spacer>
     <span>
         <v-btn color="info" :to="{name: 'CreateProducts'}">Add Products </v-btn>

         
     </span>
      </v-card-title>
      </v-card>
    <v-divider>

    </v-divider>
    <v-card>

    <v-card-title>
            Products Table
            <v-spacer></v-spacer>
            <v-text-field v-model="search" icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="products"
            :items-per-page="5"
            class="elevation-1"
            :search="search"
            
          >
          <template v-slot:item.action="{item}" >
                <v-icon color="success"  
                 small  @click="editProduct(item)">{{ icons.mdiPencil }}</v-icon>
                <v-icon 
                small @click="deleteProduct(item.idproducts)"
                left color="error">{{ icons.mdiDelete }}</v-icon>
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
            text: 'Id Products ',
            value: 'idproducts'
          },
          {
            text: 'Name',
            value: 'nama'
          },

           {
            text: 'Id Categories',
            value: 'idcategories'
          },
          {
            text: 'Name Categories',
            value: 'namacategories'
          },

          {
            text: 'Price',
            value: 'harga'
          },
          {
            text: 'Stock',
            value: 'stok'
          },
          // {
          //   text: 'Action',
          //   // value: 'action'
          // }
        ]
      }     
    },
    computed: {
      products() {
         return this.$store.state.Products.products
       }
    },
    mounted () {
     this.$store.dispatch('fetchproducts')// DISPATCH loadCustomer YANG BERADA DALAM MODULE Customers
    // store.dispatch('')
   
  },
  methods:{
   editProduct(item) {
     this.$router.push({name: 'updateproducts',
      params:{
      idproducts: item.idproducts, 
      nama: item.nama,   
      idcategories: item.idcategories,
      harga: item.harga,
      stok: item.stok

      }})
   },

     deleteProduct(idproducts){
        this.$store.dispatch('deleteProducts', idproducts)
        alert('product deleted !!!')
    }
  }
  
 

  }
        
  
</script>

<style>

</style>