<script>
import Firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBO5CzX_tF6WRmj3cAseENmvDKR1mucv_I",
    authDomain: "sigi-chains.firebaseapp.com",
    databaseURL: "https://sigi-chains.firebaseio.com",
    projectId: "sigi-chains",
    storageBucket: "sigi-chains.appspot.com",
    messagingSenderId: "935347129012"
  };
export default {
  name: 'App',
  props: {
    
    },
  created: function() {
    Firebase.initializeApp(config);
  }
}
</script>

<template>
  <div id="app">
    <router-view/>
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
</style>
