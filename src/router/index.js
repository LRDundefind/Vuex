import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
	    {
	      path: '/',
	      name: 'Index',
	      component: Index
	    },
	    {
		    path: '/index',
		    name: 'Index',
		    component: Index
		},
		{
		    path: '/cart',
		    name: 'Cart',
		    component: Cart
		},
  	]
})
