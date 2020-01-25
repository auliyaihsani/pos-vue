import axios from 'axios'
import router from '../router'
import qs from 'qs'

export default {
    state: {
        categories: []
    },
    getters: {
        getcategoryById: (state) => (id) => {
         return state.categories.find(category => category.idcategories === id)
      }
    },

  actions: {
      fetchcategories ({ commit}){
        axios
        .get('http://localhost/superposapi/api/categories/read.php')
        .then((categories) => {
          commit('SET_CATEGORIES', categories.data)
        }).catch((err) => {
          alert(err)
        });
      },
      
      CreateCategories ({ commit }, payload){
        axios.post('http://localhost/superposapi/api/categories/create.php',
        qs.stringify({
                nama : payload.nama,
                deskripsi: payload.deskripsi
          }), {
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }).then((categories) => {
            
            alert(categories.data.message)
            router.push({name:'categories'})
            commit('CREATE_CATEGORIES', categories.data) 
          }).catch((err) => {
                  alert('Erroru'+err)
      
        });
    },
    UpdateCategories({ commit }, payload){
      axios.put('http://localhost/superposapi/api/categories/update.php',
      qs.stringify({
              idcategories: payload.idcategories,
              nama : payload.nama,
              deskripsi: payload.deskripsi
        }), {
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then((categories) => {
          
           alert(categories.data.message)
          router.push({name:'categories'})
          // commit('UPDATE_CUSTOMER', customers.data)
        }).catch((err) => {
                alert('Erroru'+err)
    
      });
  },
  DeleteCategories({ commit }, id) {
    axios
      .delete('http://localhost/superposapi/api/categories/delete.php?id=' + id)
      .then(() => {
        commit('DELETE_CATEGORIES', id)
      })
      .catch((error) => {
        alert(error)
      })
  }

  },
      mutations: {
        SET_CATEGORIES (state, categories) { state.categories = categories },
        CREATE_CATEGORIES(state, categories) {state.categories.push([ categories ])},
        DELETE_CATEGORIES (state, id) {
          // eslint-disable-next-line
          //hapus 1 element dimulai pada nilai index
          // const index = state.customers.indexOf(id)
          // state.customers.splice(index, 1)
          const index = state.categories.findIndex(category => category.idscategories === id)
          state.categories.splice(index, 1)
        }
       

    }
  }