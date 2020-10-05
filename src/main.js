import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyC52wPqOEjpGIK1E4olE3be5rgqXHtx8s8',
		libraries: 'places', // This is required if you use the Autocomplete plugin
		// OR: libraries: 'places,drawing'
		// OR: libraries: 'places,drawing,visualization'
	},
});

Vue.config.productionTip = false;

new Vue({
	router,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
