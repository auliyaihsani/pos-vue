<template>
  <v-container fluid fill-height>
    <v-layout>
      <v-flex xs12>
        <h2 v-if="!idcategories">Create Catetgory</h2>
         <h2 v-else>Update Category</h2>
        
        <v-form  @submit.prevent="SubmitCategory"  v-model="valid">
          <ValidationProvider>
          <v-text-field  v-model="category.nama" :counter="20" 
            label="Nama" data-vv-name="nama" required  :rules="nameRules" v-slot="{ errors  }">{{ errors[0] }}</v-text-field>       
            </ValidationProvider>
        
             <ValidationProvider>
            <v-textarea  v-model="category.deskripsi" 
            label="Description" data-vv-name="deskripsi" required :rules="deskripsiRules" v-slot="{ errors }" :counter="50"> {{ errors[0] }}</v-textarea>
            </ValidationProvider>

          <v-btn v-if="!idcategories" :disabled="!valid"  color="success" type="submit" value="submit">submit</v-btn>
            <v-btn v-else :disabled="!valid"  color="success" @click="updateCategory" value="submit">Update</v-btn>
         
      
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import { mapActions } from 'vuex';
  export default {
    props:{
      idcategories: {default:null},
      nama: {default:''},
      deskripsi: {default:''}
    },
    data: () => ({
      valid: true,
      category: {
        idcategories:null,
        nama: '',
        deskripsi: ''
      },
       nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters',
      ],
       deskripsiRules: [
        v => !!v || 'deskripsi is required',
        v => v.length <= 50 || 'deskripsi must be less than 50 characters',
      ],
       
    }),
    mounted () {
      this.setCategoryProps()
    },
    methods: {
      setCategoryProps() {
        for (var key in this.category) {
          this.category[key]=this[key]
        //   console.log(this[key])
        }
      },
      updateCategory() {
        this.UpdateCategories(this.category)
      },
      SubmitCategory() {     
            this.CreateCategories(this.category)
      },
       ...mapActions(['CreateCategories', 'UpdateCategories']) 
    }
  }
</script>