import Vue from 'vue';
import App from './components/App.vue';
import router from './router';

var loader = document.getElementById('loader');
if (loader!=null && loader.firstChild) {
	loader.removeChild(loader.firstChild);
}

Vue.config.productionTip = false;

const app = new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
});
