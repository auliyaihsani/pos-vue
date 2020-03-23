import Vue from 'vue'
import Vuex from 'vuex'
import Customers from './stores/Customers'
import Supliers from  './stores/Supliers'
import Categories from  './stores/Categories'
import Products from './stores/Products'
import Orders from './stores/Orders'
import Purchases from './stores/Purchases'
import Users from './stores/Users'


Vue.use(Vuex)

export const store = new Vuex.Store({
modules:{
    Customers,
    Supliers,
    Categories,
    Products,
    Orders,
    Purchases,
    Users
    }
})