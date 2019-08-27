import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'
const Home = ()=>import('../components/Home.vue')
const About= ()=>import('../components/About.vue')
const User = ()=>import('../components/User.vue')
const News = ()=>import('../components/children/HomeNews.vue')
const Message = ()=>import('../components/children/HomeMessage.vue')
const Profile = ()=>import('../components/Profile.vue')
const  routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home,
		children:[
			{path:'',redirect:'news'},
			{path:'news',component:News},
			{path:'message',component:Message}
		],
		meta:{
			title:'首页'
		}
	},
	{
		path:'/about',
		component:About,
		meta:{
			title:'关于'
		}
	},
	{
		path:'/user/:userId',
		component:User,
		meta:{
			title:'用户'
		}
	},
	{
		path:'/profile',
		component:Profile,
		meta:{
			title:'档案'
		}
	}
]

const router = new VueRouter({
	// 配置路由和组件间的对应关系
	routes,
	mode:'history',
	linkActiveClass:'active'
})
router.beforeEach((to,from,next) => {
	document.title = to.matched[0].meta.title
	next()
})

// 将router导出
export default router
