import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
import Recipe from '../views/Recipe.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add',
		name: 'add',
		component: Add
	},
	{
		path:'/recipe/:id',
		component: Recipe,
		props: true
	},
	{
		path:'/login',
		component: Login
	},
	{
		path:'/signup',
		component: Signup
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
