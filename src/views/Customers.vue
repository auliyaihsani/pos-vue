<template>
    <ListCustomers></ListCustomers>
</template>

<script>
// import {  mapActions } from "vuex"
import ListCustomers from '@/components/customers/ListCustomers'

export default {
  name: 'Customers',
  components: {
    ListCustomers
  },
  
  created () {
     this.$store.dispatch('fetchCustomers')// DISPATCH loadCustomer YANG BERADA DALAM MODULE Customers
    // store.dispatch('')
   
  }
}
</script>