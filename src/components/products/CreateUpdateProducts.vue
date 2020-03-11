<template>
  <v-container fluid fill-height>
    <v-layout>
      <v-flex xs12>
        <h2 v-if="!idproducts">Create Product</h2>
         <h2 v-else>Update product</h2>
        
        <v-form  @submit.prevent="Submitproduct"  v-model="valid">
          <ValidationProvider>
          <v-text-field  v-model="product.nama" :counter="20" 
          label="Nama" data-vv-name="nama" required  
          :rules="nameRules" v-slot="{ errors  }">{{ errors[0] }}</v-text-field>       
            </ValidationProvider> 

            <v-select
            :items="products"
            v-model="product.idcategories"
            item-text="nama"
            item-value="idcategories"
            label="Categories"
            data-vv-name="idcategories"
            autocomplete
            :rules="[v => !!v || 'Categories is required']"
          ></v-select>
          
          <v-text-field  v-model="product.harga" 
            label="Harga" data-vv-name="harga" required  
            :rules="[v => !!v || 'Categories is required']"
            v-slot="{ errors  }"></v-text-field>       
            

             <v-text-field  v-model="product.stok" 
            label="stok" data-vv-name="stok" required 
             :rules="[v => !!v || 'Stock is required']">
            </v-text-field>       
           
        
          <v-btn v-if="!idproducts" :disabled="!valid"  color="success" type="submit" value="submit">submit</v-btn>
            <v-btn v-else :disabled="!valid"  color="success" @click="updateproduct" value="submit">Update</v-btn>
         
      
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    idproducts: { default: null },
    nama: { default: "" },
    idcategories: { default: null },
    harga:  { default: null },
    stok:  { default: null }
  },
  data: () => ({
    valid: true,
    product: {
      idproducts: null,
      nama: '',
      idcategories: null,
      harga: null,
      stok:  null
    },
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 20 || "Name must be less than 20 characters"
    ],
    
  }),
  mounted() {
    this.setproductProps();
  },
   computed: {
      categories() {
        return this.$store.state.Categories.categories
      }
    },
  created(){
      this.$store.dispatch('fetchcategories');
  },


  methods: {
    setproductProps() {
      for (var key in this.product) {
        this.product[key] = this[key];
          console.log(this[key])
      }
    },
    updateproduct() {
      this.updateProducts(this.product);
    },
    Submitproduct() {
      this.createProducts(this.product);
    },
    ...mapActions(["createProducts", "updateProducts"])
  }
};
</script>