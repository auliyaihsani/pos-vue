<template>
<v-flex xs12>
  <v-card>
      <v-card-title primary-title>
    <span class="title" >Supliers Page</span>
     <v-spacer></v-spacer>
     <span>
         <v-btn color="info" :to="{name: 'CreateSupliers'}">Add Supliers </v-btn>
         
     </span>
      </v-card-title>
      </v-card>
    <v-divider>

    </v-divider>
    <v-card>

    <v-card-title>
            Supliers Table
            <v-spacer></v-spacer>
            <v-text-field v-model="search" icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="supliers"
            :items-per-page="5"
            class="elevation-1"
            :search="search"
            
          >
          <template v-slot:item.action="{item}" >
                <v-icon color="success" @click="editSuplier(item)">{{ icons.mdiPencil }}</v-icon>
              <v-icon left color="error" @click="DeleteSuplier(item.idsupliers)">{{ icons.mdiDelete }}</v-icon>
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
            value: 'idsupliers'
          },
          {
            text: 'Name',
            value: 'nama'
          },
          {
            text: 'Address',
            value: 'alamat'
          },
          {
            text: 'Tlp',
            value: 'tlp'
          },
          {
            text: 'Email',
            value: 'email'
          },
          {
            text: 'Action',
            value: 'action'
          }
        ]
      }     
    },
    computed: {
      supliers() {
        return this.$store.state.Supliers.supliers
      }
    },
    mounted () {
     this.$store.dispatch('fetchsupliers')// DISPATCH loadCustomer YANG BERADA DALAM MODULE Customers
    // store.dispatch('')
   
  },
  methods:{
   editSuplier (item) {
     this.$router.push({name: 'updatesuplier',
      params:{
      idsupliers: item.idsupliers,
      nama:item.nama,
      alamat:item.alamat,
      tlp:item.tlp,
      email:item.email
      }})
   },

     DeleteSuplier(idsupliers){
        this.$store.dispatch('DeleteSupliers', idsupliers)
        alert('Suplier deleted !!!')
   }
  }
  
 

  }
        
  
</script>

<style>

</style>