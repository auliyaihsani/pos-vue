<template>
  <ListSupliers></ListSupliers>
</template>

<script>
import ListSupliers from '@/components/supliers/ListSupliers'

export default {
  name: 'Supliers',
  components: {
      ListSupliers
  },
  created () {
     this.$store.dispatch('fetchsupliers')// DISPATCH loadCustomer YANG BERADA DALAM MODULE Customers
    // store.dispatch('')
   
  }
  
}

</script>

<style>

</style>
