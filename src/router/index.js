import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Second from '@/components/Second'
import Third from '@/components/Third'
import LianJie from '@/components/LianJie'
Vue.use(Router)

export default new Router({
  routes: [
		
    {
      path: '/',
      name:'HelloWorld',
      component: HelloWorld,
			children:[{
					path: '/first',
					name:'First',
					component: First
				}	,
				{
					path: '/second',
					name:'Second',
					component: Second
				},
				{
					path: '/third',
					name:'Third',
					component: Third,
					
				},
				{
					path: '/lianJie',
					name:'LianJie',
					component: LianJie
				}
				]
    }
	
  ]
})
