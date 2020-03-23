<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm5 md3>
        <v-flex lg12 tag='h1' class='headline ma-1'>Users Page</v-flex>
      </v-flex>
      <v-flex xs12 sm5 md5 offset-xs0 offset-md2 offset-lg4 class="text-xs-right">
          <v-btn color='info' :to="{name: 'CreateUsers'}">Tambah Users</v-btn>
      </v-flex>
      <v-flex xs12 sm6 md4 lg3   >
        <v-card class="text-xs-center ma-2">
          <v-responsive class="pt-4">
            <v-avatar size="100" class="grey lighten-2">
              <img >
            </v-avatar>
          </v-responsive>

          <v-card-text>
            <div class="subheading">
       
            </div>
            <div class="grey--text">
         
            </div>
          </v-card-text>

          <v-card-actions class="d-inline-block">
            <v-btn color="error">delete<v-icon 
                
                 >{{ icons.mdiDelete }}</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

       <v-flex xs12 sm6 md4 lg3  >
        <v-card class="text-xs-center ma-2">
          <v-responsive class="pt-4">
            <v-avatar size="100" class="grey lighten-2">
              <img class="container">
            </v-avatar>
          </v-responsive>

          <v-card-text>
            <div class="subheading">
       
            </div>
            <div class="grey--text">
         
            </div>
          </v-card-text>

          <v-card-actions class="d-inline-block">
            <v-btn color="error">delete<v-icon 
                
                 >{{ icons.mdiDelete }}</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
          {
            text: 'Action',
            value: 'action'
          }
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
