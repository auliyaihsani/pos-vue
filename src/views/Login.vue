<template>
  <v-container fluid fill-height>
    <v-layout>
      <v-flex xs12>
         
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>LOGIN SANI-POS</v-toolbar-title>
          </v-toolbar>
          <v-divider></v-divider>
          <v-container fluid>
            <v-form>
              <v-text-field
                label="Username" v-model="user.username" data-vv-name="username" ></v-text-field>

              <v-text-field
                label="Password" data-vv-name="password" v-model="user.password" ></v-text-field>
              <div class="text-center">
                <v-btn @click.prevent="Submitlogin" color="info" >Login</v-btn>
              </div>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'login',
  data: () => ({
    show1: true,
    user: {
      username: '',
      password: ''
    },
   
  }),
  methods: {
//     SubmitLogin () {
//       this.$validator.validateAll().then(res => {
//         if (res) {
//           this.$store.dispatch('Users/loginUsers', this.user)
//         } else {
//           console.log('Input data dengan benar')
//         }
//       })
//     }

     Submitlogin() {
      this.loginUsers(this.user);
    },
      ...mapActions(['loginUsers'])
  }
}
</script>
