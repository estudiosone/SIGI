import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebase from 'firebase';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyBO5CzX_tF6WRmj3cAseENmvDKR1mucv_I',
  authDomain: 'sigi-chains.firebaseapp.com',
  databaseURL: 'https://sigi-chains.firebaseio.com',
  projectId: 'sigi-chains',
  storageBucket: 'sigi-chains.appspot.com',
  messagingSenderId: '935347129012',
};

firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
