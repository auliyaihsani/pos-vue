import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Customers from './views/Customers.vue'
import Supliers from './views/Supliers.vue'
import Categories from './views/Categories.vue'
import Products from './views/Products.vue'
import Orders from './views/Orders.vue'
import Purchases from './views/Purchases.vue'
import Users from './views/Users.vue'


import CreateUpdateCustomers from './components/customers/CreateUpdateCustomers'
import CreateUpdateSupliers from './components/supliers/CreateUpdateSupliers'
import CreateUpdateCategories from './components/categories/CreateUpdateCategories'
import CreateUpdateProducts from './components/products/CreateUpdateProducts'
import CreateUpdateOrders from './components/orders/CreateUpdateOrders'
import CreateUpdatePurchases from './components/purchases/CreateUpdatePurchases'
import CreateUpdateUsers from './components/users/CreateUpdateUsers'
// import EditCustomer from './components/customers/EditCustomer'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/customers/create',
      name: 'CreateCustomers',
      component: CreateUpdateCustomers
    },
    {
      path: '/customer/detail',
      name: 'detailcustomer',
      component: CreateUpdateCustomers,
      props: true
    },
   
    {
      path: '/supliers',
      name: 'supliers',
      component: Supliers
    },
    {
      path: '/supliers/create',
      name: 'CreateSupliers',
      component: CreateUpdateSupliers
    },
    {
      path: '/suplier/detail',
      name: 'updatesuplier',
      component: CreateUpdateSupliers,
      props: true
    },


     {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/categories/create',
      name: 'CreateCategories',
      component: CreateUpdateCategories
    },
    {
      path: '/category/detail',
      name: 'updatecategories',
      component: CreateUpdateCategories,
      props: true
    },

    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/products/create',
      name: 'CreateProducts',
      component: CreateUpdateProducts
    },
    {
      path: '/product/detail',
      name: 'updateproducts',
      component: CreateUpdateProducts,
      props: true
    },

   
    
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/orders/create',
      name: 'CreateOrders',
      component: CreateUpdateOrders
    },
    {
      path: '/order/detail',
      name: 'updateorders',
      component: CreateUpdateOrders,
      props: true
    },

    {
      path: '/purchases',
      name: 'Purchases',
      component:Purchases
    },

    {
      path: '/purchases/create',
      name: 'CreatePurchases',
      component:CreateUpdatePurchases
    },

    {
      path: '/purchases/detail',
      name: 'UpdatePurchases',
      component:CreateUpdatePurchases,
      props: true
    },


    {
      path: '/users',
      name: 'users',
      component:Users
    },

    {
      path: '/users/create',
      name: 'CreateUsers',
      component:CreateUpdateUsers
    },

    {
      path: '/users/detail',
      name: 'UpdateUsers',
      component:CreateUpdateUsers,
      props:true
    },

   

    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
