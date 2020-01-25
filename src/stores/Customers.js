import axios from 'axios'
import router from '../router'
import qs from 'qs'




export default {
    state: {
        customers: []
    },
    getters: {
        getCustomerById: (state) => (id) => {
         return state.customers.find(customer => customer.idcustomers === id)
      }
    },

  actions: {
      fetchCustomers ({ commit}){
        axios
        .get('http://localhost/superposapi/api/customers/read.php')
        .then((customers) => {
          commit('SET_CUSTOMERS', customers.data)
        }).catch((err) => {
          alert(err)
        });
      },

      CreateCustomers ({ commit }, payload){
        axios.post('http://localhost/superposapi/api/customers/create.php',
        qs.stringify({
                nama : payload.nama,
                tlp: payload.tlp,
                email: payload.email,
                alamat: payload.alamat
          }), {
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }).then((customers) => {
            
            alert(customers.data.message)
            router.push({name:'customers'})
            commit('CREATE_CUSTOMERS', customers.data) 
          }).catch((err) => {
                  alert('Erroru'+err)
      
        });
    },
    UpdateCustomers ({ commit }, payload){
      axios.put('http://localhost/superposapi/api/customers/update.php',
      qs.stringify({
            idcustomers: payload.idcustomers,
              nama : payload.nama,
              tlp: payload.tlp,
              email: payload.email,
              alamat: payload.alamat
        }), {
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then((customers) => {
          
           alert(customers.data.message)
          router.push({name:'customers'})
          // commit('UPDATE_CUSTOMER', customers.data)
        }).catch((err) => {
                alert('Erroru'+err)
    
      });
  },
  deleteCustomers ({ commit }, id) {
    axios
      .delete('http://localhost/superposapi/api/customers/delete.php?id=' + id)
      .then(() => {
        commit('DELETE_CUSTOMER', id)
      })
      .catch((error) => {
        alert(error)
      })
  }

  },
      mutations: {
        SET_CUSTOMERS (state, customers) { state.customers = customers },
         CREATE_CUSTOMERS (state, customers) { state.customers.push([ customers]) },
         DELETE_CUSTOMER (state, id) {
          // eslint-disable-next-line
          //hapus 1 element dimulai pada nilai index
          // const index = state.customers.indexOf(id)
          // state.customers.splice(index, 1)
    
          const index = state.customers.findIndex(customer => customer.idcustomers === id)
          state.customers.splice(index, 1)
        }
    

    }
  }