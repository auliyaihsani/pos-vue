<template>
      <div id="app">
            <v-app>
      <v-card>
      <v-navigation-drawer v-model="drawer" app fixed>
          <v-list-item >
            <v-list-item-content color="success">
              <v-list-item-title class="title">
             
               <v-avatar size="25">
                <img src="@/assets/logo.png" alt="avatar">
              </v-avatar>
              <router-link to="/" tag="span" style="cursor:pointer"> &nbsp; POS-APP</router-link>
              </v-list-item-title>
              <!-- <v-list-item-subtitle>
                subtext
              </v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
            dense
            nav
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.link"
             
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>

 
      <v-app-bar app fixed >
      <v-app-bar-nav-icon @click.stop="drawer=!drawer" ></v-app-bar-nav-icon>
        
      <v-toolbar-title v-show="!drawer" class="title">
       <v-avatar size="25">
      <img src="@/assets/logo.png" alt="avatar">
      </v-avatar>
      <router-link to="/" tag="span" style="cursor:pointer"> &nbsp; SANI-POS</router-link>
      </v-toolbar-title>

     
     
    </v-app-bar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>

     <v-footer
      
      class="font-weight-medium"
  
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Mohammad Auliya Ihsani</strong>
      </v-col>
    </v-footer>
     </v-app>
  </div>
</template>

<script>
  export default {
   name: 'App',
   data:()=>({
     drawer: false,
     
     items: [
          { title: 'Home',        icon: 'mdi-home', link: '/'},
          { title: 'Categories',  icon: 'mdi-view-dashboard', link: '/categories' },
          { title: 'Customers',   icon: 'mdi-view-dashboard', link: '/customers'},
          { title: 'Supliers',    icon: 'mdi-view-dashboard', link: '/supliers'},
          { title: 'Products',    icon: 'mdi-view-dashboard', link: '/products'},
          { title: 'purchase Item',    icon: 'mdi-view-dashboard', link: '/purchase'},
          { title: 'orders',    icon: 'mdi-view-dashboard', link: '/orders/create'},
          { title: 'users',    icon: 'mdi-view-dashboard', link: '/users'},
          { title: 'About',       icon: 'mdi-account', link:'about' }
        ],
   })
  }

</script>

<style>

</style>

