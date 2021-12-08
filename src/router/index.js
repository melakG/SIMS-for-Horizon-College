import { createRouter, createWebHistory } from 'vue-router'
import employeeMenu from './employee'
import studentMenu from './student'
import Home from '../views/home/Home'
const routes = [
  employeeMenu,
  studentMenu,
  {
    path:'/',
    name:'home',
    component:Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
