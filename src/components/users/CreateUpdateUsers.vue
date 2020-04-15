<template>
  <v-container fluid fill-height>
    <v-layout>
      <v-flex xs12>
        <h2>Create User</h2>
        <form @submit.prevent="Submituser">
     
          <v-text-field  v-model="user.username" :counter="10" 
          label="Username" data-vv-name="username" required></v-text-field>       

          <v-text-field  v-model="user.password" :counter="7" 
          label="Password" data-vv-name="password" required ></v-text-field>       
            
          <v-text-field  v-model="user.role"  
          label="Role" data-vv-name="role" required ></v-text-field>       
  
       
          <br>
          <v-btn color = 'primary dark' :disabled="!valid" type="submit">submit</v-btn>
            <!-- <v-btn v-if="!idproducts" :disabled="!valid"  color="success" type="submit" value="submit">submit</v-btn> -->
        </form>
      </v-flex>
    </v-layout>
  </v-container>

</template>


<script>
import { mapActions } from "vuex";
export default {
  props: {
    idusers: { default: null },
    username: { default: "" },
    password: { default: "" },
    role:  { default: "" },

  },

  data: () => ({
    valid: true,
    
    user: {
      idusers: null,
      username: '',
      password: '',
      role: '',

    }  
    
    
  }),
  mounted() {
    this.setUsersProps();
  },

  methods: {
    setUsersProps() {
      for (var key in this.user) {
        this.user[key] = this[key];
          console.log(this[key])
      }
    },

    onFileChanged (event) {
      this.payload.selectedFile = event.target.files[0]
      this.payload.fotoname = event.target.files[0]
    },
   
    Submituser() {
      this.createUsers(this.user);
    },
    ...mapActions(['createUsers'])
  }
};
</script>


<style>

</style>
