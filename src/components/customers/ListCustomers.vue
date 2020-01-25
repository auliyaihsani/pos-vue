<template>
<v-flex xs12>
  <v-card>
      <v-card-title primary-title>
    <span class="title" >Customer Page</span>
     <v-spacer></v-spacer>
     <span>
         <v-btn color="info" :to="{name: 'CreateCustomers'}">Add Customer</v-btn>
         
     </span>
      </v-card-title>
      </v-card>
    <v-divider>

    </v-divider>
    <v-card>

    <v-card-title>
            Customers Table
            <v-spacer></v-spacer>
            <v-text-field v-model="search" icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="customers"
            :items-per-page="5"
            class="elevation-1"
            :search="search"
            
          >
          <template v-slot:item.action="{item}" >
               <v-icon color="success"
                small
                @click="editCustomer(item)"
                class="mr-2" 
                >
                {{ icons.mdiPencil }}
              </v-icon>
              
              <v-icon color="error" 
                small
                @click.prevent="DeleteCustomer(item.idcustomers)"
              >
                {{ icons.mdiDelete }}
              </v-icon>
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
        icons: {
             mdiAccount,
             mdiPencil,
             mdiShareVariant,
             mdiDelete,
            },
        search: '',
         headers: [{
            // id: 'id',
            align: 'center',
            sortable: true,
            // value: 'idcustomers'
          },
          {
            text: 'id',
            value: 'idcustomers'
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
      customers() {
        return this.$store.state.Customers.customers
      }
    },
    mounted () {
     this.$store.dispatch('fetchCustomers')// DISPATCH loadCustomer YANG BERADA DALAM MODULE Customers
    // store.dispatch('')

   
  },
  methods:{
   editCustomer (item) {
     this.$router.push({name:'detailcustomer',
      params:{
      idcustomers: item.idcustomers,
      nama:item.nama,
      alamat:item.alamat,
      tlp:item.tlp,
      email:item.email
      }})
   },

     DeleteCustomer(id){
        this.$store.dispatch('deleteCustomers', id)
        alert('Customer deleted !!!')
   }
  }
  
 

  }
        
  
</script>

<style>

</style>
