<template>
  <ListCategories></ListCategories>
</template>

<script>
import ListCategories from '@/components/categories/ListCategories'

export default {
  name: 'Categories',
  components: {
      ListCategories
  },
  created () {
     this.$store.dispatch('fetchcategories')// DISPATCH loadCustomer YANG BERADA DALAM MODULE Customers
    // store.dispatch('')

  }
  
}

</script>

<style>

</style>
