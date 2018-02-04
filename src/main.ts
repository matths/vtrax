import Vue from 'vue';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
//import 'vue-material/dist/theme/default-dark.css';

import App from './components/App.vue';
import router from './router';

var loader = document.getElementById('loader');
if (loader!=null && loader.firstChild) {
	loader.removeChild(loader.firstChild);
}

Vue.config.productionTip = false;

Vue.use(VueMaterial);

const app = new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
});
