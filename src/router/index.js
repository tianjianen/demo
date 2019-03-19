import Vue from 'vue'
import Router from 'vue-router'
import  Home from '@/components/home'
import MVInfo from '@/components/mvinfo/mvinfo'
import ArticleInfo from '@/components/articleinfo/articleinfo'
import PictureInfo from '@/components/pictureinfo/pictureinfo'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home',
			name: 'Home',
			component: Home
		},
		{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/mvinfo/:id',
		name: 'MVInfo',
		component: MVInfo
	},
	{
		path: '/article',
		name: 'ArticleInfo',
		component: ArticleInfo
	},
	{
		path: '/picture',
		name: 'PictureInfo',
		component: PictureInfo
	},
]
})