<template>
  <CreateUpdateOrders></CreateUpdateOrders>
</template>

<script>
import CreateUpdateOrders from '@/components/orders/CreateUpdateOrders'

export default {
  name: 'CreateOrders',
  components: {
      CreateUpdateOrders
  },
  created () {
      this.$store.dispatch('fetchCustomers');
      this.$store.dispatch('fetchproducts');  
      this.$store.dispatch('loadOrders');

      
  }
  
}

</script>

<style>

</style>
