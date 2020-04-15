// import Vue from 'vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)

export default  {
//   namespaced: true,
  state: {
    orders: []
  },
  getters: {
    total (state) {
      return state.orders.reduce((total, p) => {
        return total + p.harga * p.qty
      }, 0)
    }
  },
  actions: {
    // loadProducts ({ commit }) {
    //   axios
    //     .get('http://localhost/superposapi/api/products/read.php')
    //     .then(r => r.data)
    //     .then(products => {
    //       commit('SET_PRODUCTS', products)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    OrderCheckOut ({ commit, getters, dispatch, state }, id) {
      const DataOrder = new FormData()
      DataOrder.set('idcustomers', id)
      DataOrder.set('total', getters.total)
      DataOrder.set('orders', JSON.stringify(state.orders))
      axios
        .post('http://localhost/superposapi/api/orderdetails/checkout.php', DataOrder)
        .then((checkout) => {
          commit('DONE_CHECKOUT', checkout.data)
          dispatch('fetchproducts', null, { root: true })

          
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // addOrderToCart ({ rootGetters, state, commit }, orders) {
    //   let cartOrder = state.orders.find(order => order.idproducts === orders.idproducts)
    //   if (!cartOrder) {
    //     const data = rootGetters('products/getproducsById'(orders.idproducts));
    //     const DataOrder = {
    //       idproducts: data.idproducts,
    //       nama: data.nama,
    //       harga: data.harga,
    //       qty: orders.qty,
    //       stok: data.stok
    //     }
    //     console.log(data);
    //     commit('ADD_ORDER', DataOrder )
        
    //   } else {
    //     cartOrder.qty = parseInt(cartOrder.qty) + parseInt(orders.qty)
    //     commit('UPDATE_QTY', cartOrder)
    //   }
    // },
    deleteOrder ({ commit }, id) {
      commit('DELETE_ORDER', id)
      // axios
      //   .delete('http://localhost/superposapi/api/orderdetails/delete.php?id=' + id)
      //   .then(() => {
      //     commit('DELETE_ORDER', id)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
    }
  },
  mutations: {
    ADD_ORDER (state, DataOrder) {
      state.orders.push(DataOrder)
    },
    UPDATE_QTY (state, cartOrder) {
      const order = state.orders.find(order => order.idproducts === cartOrder.idproducts)
      order.qty = cartOrder.qty
    },
    DONE_CHECKOUT (state) {
      state.orders = []
    },
    DELETE_ORDER (state, id) {
      // menemukan index ke berapa id tsb berada
      const index = state.orders.findIndex(order => order.idproducts === id)
      state.orders.splice(index, 1)
    }
  }
}

// export default orders
