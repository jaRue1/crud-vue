import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Admin from '../pages/admin/Admin.vue'
import Products from '../pages/admin/Products.vue'
import ProductsCreate from "../pages/admin/ProductsCreate.vue"
import ProductsEdit from "../pages/admin/ProductsEdit.vue"
import Main from "../pages/Main.vue"

const routes: Array<RouteRecordRaw> = [
  {
    // adding the main page to router
    path: '/', component: Main
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    // because of this we can see the table : 
    // we i imported it within the router using the same path as the Admin component 
    // so it renders on the page.
    children: [
      { path: 'products', component: Products },
      { path: 'products/create', component: ProductsCreate },
      { path: 'products/:id/edits', component: ProductsEdit }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
