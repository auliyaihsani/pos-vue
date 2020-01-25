import axios from 'axios'
import router from '../router'
import qs from 'qs'

export default {
    state: {
        supliers: []
    },
    getters: {
        getSuplierById: (state) => (id) => {
         return state.supliers.find(suplier => suplier.idsupliers === id)
      }
    },

  actions: {
      fetchsupliers ({ commit}){
        axios
        .get('http://localhost/superposapi/api/supliers/read.php')
        .then((supliers) => {
          commit('SET_SUPLIERS', supliers.data)
        }).catch((err) => {
          alert(err)
        });
      },
      
      CreateSupliers ({ commit }, payload){
        axios.post('http://localhost/superposapi/api/supliers/create.php',
        qs.stringify({
                nama : payload.nama,
                tlp: payload.tlp,
                email: payload.email,
                alamat: payload.alamat
          }), {
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }).then((supliers) => {
            
            alert(supliers.data.message)
            router.push({name:'supliers'})
            commit('CREATE_SUPLIERS', supliers.data) 
          }).catch((err) => {
                  alert('Erroru'+err)
      
        });
    },
    UpdateSupliers({ commit }, payload){
      axios.put('http://localhost/superposapi/api/supliers/update.php',
      qs.stringify({
            idsupliers: payload.idsupliers,
              nama : payload.nama,
              tlp: payload.tlp,
              email: payload.email,
              alamat: payload.alamat
        }), {
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then((supliers) => {
          
           alert(supliers.data.message)
          router.push({name:'supliers'})
          // commit('UPDATE_CUSTOMER', customers.data)
        }).catch((err) => {
                alert('Erroru'+err)
    
      });
  },
  DeleteSupliers ({ commit }, id) {
    axios
      .delete('http://localhost/superposapi/api/supliers/delete.php?id=' + id)
      .then(() => {
        commit('DELETE_SUPLIER', id)
      })
      .catch((error) => {
        alert(error)
      })
  }

  },
      mutations: {
        SET_SUPLIERS (state, supliers) { state.supliers = supliers },
        CREATE_SUPLIERS(state, supliers) {state.supliers.push([ supliers ])},
        DELETE_SUPLIER (state, id) {
          // eslint-disable-next-line
          //hapus 1 element dimulai pada nilai index
          // const index = state.customers.indexOf(id)
          // state.customers.splice(index, 1)
    
          const index = state.supliers.findIndex(suplier => suplier.idsupliers === id)
          state.supliers.splice(index, 1)
        }
       

    }
  }