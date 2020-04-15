<template>
<v-flex xs12>
  <v-card>
      <v-card-title primary-title>
    <span class="title" >Users Page</span>
     <v-spacer></v-spacer>
     <span>
         <v-btn color="primary dark" :to="{name: 'CreateUsers'}">Add Userss </v-btn>

         
     </span>
      </v-card-title>
      </v-card>
    <v-divider>

    </v-divider>
    <v-card >

    <v-card-title>
            List Users
            <v-spacer></v-spacer>
            <v-text-field v-model="search" icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
          </v-card-title>
           <v-row class="space">
         <v-flex xs12 sm6 md4 lg3 v-for="user in users" :key="user.idusers">
        <v-card  class=" ma-5">
          <v-card-text class="text-center">
           
            <v-avatar size="120" class=" text-center grey lighten-2">
            <!-- <img v-bind:src="`http://localhost/superposapi/upload/${user.foto}`" alt="avatar"> -->
            </v-avatar>
       
            <div class="subheading">
              {{user.username}}
            </div>
            <div class="grey--text">
              {{user.role}}
            </div>

            <v-card-actions class="d-inline-block">
            <v-btn  color="error" >delete user</v-btn>
          </v-card-actions>
          </v-card-text>

          
        </v-card>
        
      </v-flex>
       </v-row>
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
            text: 'Id Users ',
            value: 'idusers'
          },
          {
            text: 'Username',
            value: 'username'
          },
          {
            text: 'Password',
            value: 'password'
          },
          {
            text: 'Role',
            value: 'role'
          },
          // {
          //   text: 'Username',
          //   value: 'username'
          // },
        
        ]
      }     
    },
    computed: {
      users() {
         return this.$store.state.Users.users
       }
    },
    mounted () {
     this.$store.dispatch('loadUsers')// DISPATCH loadCustomer YANG BERADA DALAM MODULE Customers
      // DISPATCH loadCustomer YANG BERADA DALAM MODULE Customers
    // store.dispatch('')
   
  },
  methods:{
  //  editUsers(item) {
  //    this.$router.push({name: 'UpdateUsers',
  //     params:{
  //     idusers: item.idusers, 
  //     nama: item.username,   
  //     password: item.password,
  //     role: item.role,
  //     foto: item.foto

  //     }})
  //  },

     deleteProduct(idusers){
        this.$store.dispatch('deleteUsers', idusers)
        alert('Users deleted !!!')
    }
  }
  
}
</script>

<style>

</style>
