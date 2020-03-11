import axios from 'axios'
import router from '../router'
import qs from 'qs'

export default {
    state: {
        products: []
    },
    getters: {
        getproductsById: (state) => (id) => {
         return state.products.find(product => product.idproducts === id)
      }
    },

  actions: {
      fetchproducts ({ commit}){
        axios.get('http://localhost/superposapi/api/products/read.php')
        .then((products) => {
          commit('SET_PRODUCTS', products.data)
        }).catch((err) => {
          alert(err)
        });
      },
      
      createProducts ({ commit }, payload){
        console.log(payload.idcategories);
        axios.post('http://localhost/superposapi/api/products/create.php',
        qs.stringify({
                nama : payload.nama,
                idcategories : payload.idcategories,
                harga: payload.harga,
                stok: payload.stok
          }), {
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded",
              // "Access-Control-Allow-Origin": "POST",
              // "Accept": "application/json",
              // "Access-Control-Allow-Credentials": "true",
              // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With"
            }
          }).then((products) => {
            
            alert(products.data.message)
            // console.log(products);
            router.push({name:'products'})
            commit('CREATE_PRODUCTS', products.data) 
          }).catch((err) => {
                  alert('Erroru'+err);
      console.log(err);
        });
    },
    updateProducts ({ commit }, payload){
      axios.put('http://localhost/superposapi/api/products/update.php',
      qs.stringify({
                idproducts: payload.idproducts,
                nama : payload.nama,
                idcategories : payload.idcategories,
                harga: payload.harga,
                stok: payload.stok
        }), {
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
           
          }
        }).then((products) => {
          
           alert(products.data.message)
          router.push({name:'products'})
          // commit('UPDATE_CUSTOMER', customers.data)
           // console.log(products);
        }).catch((err) => {
                alert('Erroru'+err)
    
      });
  },
  deleteProducts({ commit }, id) {
    axios.delete('http://localhost/superposapi/api/products/delete.php?id=' + id)
      .then(() => {
        commit('DELETE_PRODUCTS', id)
      })
      .catch((error) => {
        alert('Erroru'+error)
    
      })
  }

  },
      mutations: {
        SET_PRODUCTS (state, products) { state.products = products },
        CREATE_PRODUCTS(state, products) {state.products.push([ products ])},
        DELETE_PRODUCTS (state, id) {
          // eslint-disable-next-line
          //hapus 1 element dimulai pada nilai index
          // const index = state.customers.indexOf(id)
          // state.customers.splice(index, 1)
          const index = state.products.findIndex(product => product.idproducts === id)
          state.products.splice(index, 1)
        }
       

    }
  }