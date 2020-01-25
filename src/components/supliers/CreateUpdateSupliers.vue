<template>
  <v-container fluid fill-height>
    <v-layout>
      <v-flex xs12>
        <h2 v-if="!idsupliers">Create Suplier</h2>
         <h2 v-else>Update Suplier</h2>
        
        <v-form  @submit.prevent="SubmitSuplier"  v-model="valid">
          <ValidationProvider>
          <v-text-field  v-model="suplier.nama" :counter="20" 
            label="Nama" data-vv-name="nama" required  :rules="nameRules" v-slot="{ errors  }">{{ errors[0] }}</v-text-field>       
            </ValidationProvider>
          
          <ValidationProvider>
          <v-text-field v-model="suplier.tlp" 
            label="Telepon" data-vv-name="tlp" required :counter="12" :rules="tlpRules" v-slot="{ errors }">{{ errors[0] }}</v-text-field>
          </ValidationProvider>
          
          <ValidationProvider>
          <v-text-field v-model="suplier.email" 
            label="E-mail" data-vv-name="email" required :rules="emailRules" v-slot="{ errors }">{{ errors[0] }}  </v-text-field>
          </ValidationProvider>

             <ValidationProvider>
            <v-textarea  v-model="suplier.alamat" 
            label="Alamat" data-vv-name="alamat" required :rules="alamatRules" v-slot="{ errors }" :counter="50"> {{ errors[0] }}</v-textarea>
            </ValidationProvider>

          <v-btn v-if="!idsupliers" :disabled="!valid"  color="success" type="submit" value="submit">submit</v-btn>
            <v-btn v-else :disabled="!valid"  color="success" @click="updateSuplier" value="submit">Update</v-btn>
         
      
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import { mapActions } from 'vuex';
  export default {
    props:{
      idsupliers: {default:null},
      nama: {default:''},
      alamat: {default:''},
      tlp: {default:''},
      email: {default:''}
    },
    data: () => ({
      valid: true,
      suplier: {
        idsupliers:null,
        nama: '',
        alamat: '',
        tlp: '',
        email: '',
      },
       nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters',
      ],
       tlpRules: [
        v => !!v || 'Telepon is required',
        v => v.length <= 12 || 'Name must be less than 12 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
       alamatRules: [
        v => !!v || 'alamat is required',
        v => v.length <= 50 || 'alamat must be less than 50 characters',
      ],
       
    }),
    mounted () {
      this.setSuplierProps()
    },
    methods: {
      setSuplierProps() {
        for (var key in this.suplier) {
          this.suplier[key]=this[key]
          // console.log(this[key])
        }
      },
      updateSuplier() {
        this.UpdateSupliers(this.suplier)
      },
      SubmitSuplier() {     
            this.CreateSupliers(this.suplier)
      },
       ...mapActions(['CreateSupliers', 'UpdateSupliers']) 
    }
  }
</script>