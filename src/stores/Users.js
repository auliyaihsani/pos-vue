import axios from 'axios'
import router from '../router'
import qs from 'qs'
import createPersistedState from "vuex-persistedstate";

export default {
    state: {
        users: []
    },
    getters: {
        getUsersById: (state) => (id) => {
         return state.users.find(user => user.idusers === id)
      }
    },

  actions: {
  
         loadUsers ({ commit}){
        axios.get('http://localhost/superposapi/api/users/read.php')
        .then((users) => {
          console.log(users);
          commit('SET_USERS', users.data)
        }).catch((err) => {
          alert(err)
        });
      },

      loginUsers ({ commit }, user) {
        axios
          .post('http://localhost/superposapi/api/users/login.php', qs.stringify(user))
          .then(response => {
            if (response.data.length > 0) {
              localStorage.setItem('username', response.data[0]['username'])
              localStorage.setItem('role', response.data[0]['role'])
              router.push('/')
            } else {
              alert('Username & Password salah')
            }
          })
          .catch((error) => {
            console.log(error)
          })
      },

      createUsers({ commit }, payload){
        axios.post('http://localhost/superposapi/api/users/create.php',
        qs.stringify({
                username : payload.username,
                password : payload.password,
                role: payload.role
              
             
          }), {
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded",
              // "Access-Control-Allow-Origin": "POST",
              // "Accept": "application/json",
              // "Access-Control-Allow-Credentials": "true",
              // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With"
            }
          }).then((users) => {
            console.log(users);
            alert(users.data.message)
            // console.log(products);
            router.push({name:'users'})
            commit('CREATE_USERS', users.data) 
          }).catch((err) => {
                  alert('Erroru'+err);
      console.log(err);
        });
    },

    

    deleteUsers({ commit }, id) {
      axios.delete('http://localhost/superposapi/api/users/delete.php?id=' + id)
        .then(() => {
          commit('DELETE_USERS', id)
        })
        .catch((error) => {
          alert('Erroru'+error)
      
        })
    }


  },
      mutations: {
        SET_USERS (state, users) { state.users = users },
        CREATE_USERS(state, users) {state.users.push([ users ])},
        DELETE_USERS (state, id) {
          // eslint-disable-next-line
          //hapus 1 element dimulai pada nilai index
          // const index = state.customers.indexOf(id)
          // state.customers.splice(index, 1)
          const index = state.users.findIndex(user => user.idproducts === id)
          state.users.splice(index, 1)
        }
       

    },
    plugins: [createPersistedState()],

 
  }