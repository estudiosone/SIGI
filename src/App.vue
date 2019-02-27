<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase';

let storeData: any;

export default Vue.extend({
  name: 'App',
  beforeCreate() {
    storeData = this.$store;
    const config = {
      apiKey: 'AIzaSyBO5CzX_tF6WRmj3cAseENmvDKR1mucv_I',
      authDomain: 'sigi-chains.firebaseapp.com',
      databaseURL: 'https://sigi-chains.firebaseio.com',
      projectId: 'sigi-chains',
      storageBucket: 'sigi-chains.appspot.com',
      messagingSenderId: '935347129012',
    };
    if (!firebase.apps[0]) {
      firebase.initializeApp(config);
    }
    firebase.auth().onAuthStateChanged((user) => {
      storeData.state.navegacion.operativa = true;
    });
  },
});
</script>


<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
body {
  position: absolute;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
#app {
  position: absolute;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.icon {
  width: 42px;
  height: 42px;
  margin: 0;
}
</style>
