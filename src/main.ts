import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebase from 'firebase';
import IconSystem from './components/icons/System.vue';
Vue.config.productionTip = false;

import { SetIcons } from './components/icons';

SetIcons(Vue);

Vue.component('icon-system', IconSystem);



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
