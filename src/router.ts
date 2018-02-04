import Vue from 'vue';
import Router from 'vue-router';

import ScreenA from './components/ScreenA.vue';
import ScreenB from './components/ScreenB.vue';
import NotFound from './components/NotFound.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: ScreenA,
		},
		{
			path: '/alternative',
			component: ScreenB,
		},
		{
			path: '*',
			component: NotFound,
		}
	]
});
