import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import vuetify from './plugins/vuetify'
import 'vue-material-design-icons/styles.css';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full';
Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false
console.log(process.env.VUE_APP_TITILE);
new Vue({
  router,
  store,
  vuetify,


  render: h => h(App)
}).$mount('#app')
