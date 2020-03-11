<template>
  <ListProducts></ListProducts>
</template>

<script>
import ListProducts from '@/components/products/ListProducts'

export default {
  name: 'products',
  components: {
      ListProducts
  },
  created () {
     this.$store.dispatch('fetchproducts')// DISPATCH loadCustomer YANG BERADA DALAM MODULE Customers
    // store.dispatch('')

  }
  
}

</script>

<style>

</style>
