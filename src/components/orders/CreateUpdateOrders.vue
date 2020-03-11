<template>
  <v-container grid-list-xl tag="section">
    <v-layout row wrap>
      <v-flex xs12>
        <v-flex tag='h1' class='headline'>Transaksi sales orders</v-flex>
        <v-card>
          <v-card-text>
          <v-form data-vv-scope='form-1'>
          <v-select :items="products" item-text="nama" item-value="idproducts"
            v-model="orders.idproducts" label="Products"
            data-vv-name="idproducts" autocomplete></v-select>
          <v-text-field  v-model="orders.qty"  label="Qty" data-vv-name="qty" type="number"></v-text-field>
          <v-btn type="button" @click.prevent="AddOrder">add order</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>

          </v-card-text>
        </v-card>
      </v-flex>

       <v-flex xs12>
        <v-card>
          <v-card-text>
            <template>
              <v-data-table
                :headers="headers"
                :items="orderdetails"
                class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.index + 1 }}</td>
                  <td class="text-xs-right">{{ props.item.nama }}</td>
                  <td class="text-xs-right">{{ props.item.harga | money}}</td>
                  <td class="text-xs-right">{{ props.item.qty }}</td>
                  <td class="text-xs-right">{{ props.item.harga * props.item.qty | money }}</td>
                  <td class="text-xs-right">
                    <v-btn flat icon color="error" @click.prevent="DeleteOrder(props.item.idproducts)"><v-icon>delete</v-icon></v-btn>
                  </td>
                </template>
              </v-data-table>
              <v-card-text class="text-xs-right">Total  </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="text-xs-right">
                 <v-dialog
                    v-model="dialog"
                    width="500"
                  >
                    <v-btn :disabled="orderdetails.length === 0"
                     
                    >
                      check out
                    </v-btn>

                    <v-card>
                      <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                      >
                        Pilih Customer
                      </v-card-title>
                      <v-form @submit.prevent="SubmitCheckOut" data-vv-scope="form-2">
                      <v-card-text>
                          <v-select :items="customers" item-text="nama" item-value="idcustomers"
                          v-model="checkout.idcustomers" label="Customers"
                          data-vv-name="idcustomers" autocomplete></v-select>

                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn type="submit">save</v-btn>
                        <v-btn
                          color="primary"
                          flat
                          @click.prevent="dialog = false"
                        >
                          close
                        </v-btn>
                      </v-card-actions>
                      </v-form>
                    </v-card>
                  </v-dialog>

              </v-card-actions>

            </template>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  data: () => ({
    dialog: false,
    checkout: {
      idcustomers: ''
    },
    orders: {
      idproducts: '',
      qty: 1
    },
    headers: [
      {
        text: 'No',
        align: 'left',
        sortable: false,
        value: 'idorderdetail'
      },
      { text: 'Nama Product', value: 'nama' },
      { text: 'Harga', value: 'harga' },
      { text: 'Qty', value: 'qty' },
      { text: 'Subtotal', value: 'subtotal' },
      { text: 'Action', value: 'action' }
    ]
  }),
  computed: {
    products () {
      return this.$store.state.Products.products
    },
    orderdetails () {
      return this.$store.state.Orders.orders
    },
    total () {
      return this.$store.getters['total']
    },
    customers () {
      return this.$store.state.Customers.customers
    }
  },
  methods: {
      
    AddOrder () {
      this.then(res => {
        if (res) {
          this.$store.dispatch('addOrderToCart', this.orders)
        } else {
          console.log('Input data dengan benar')
        }
      })
    },
    SubmitCheckOut () {
      this.then(res => {
        if (res) {
          this.$store.dispatch('OrderCheckOut', this.checkout.idcustomers)
          this.dialog = false
          this.clear()
          alert('Check out orders sukses')
        } else {
          console.log('Input data dengan benar')
        }
      })
    },
    DeleteOrder (id) {
      this.$store.dispatch('deleteOrder', id)
      alert('Order Deleted')
    },
    clear () {
      this.orders.idproducts = ''
      this.orders.qty = 1
      this.checkout.idcustomers = ''
     
    }
  }
}
</script>
