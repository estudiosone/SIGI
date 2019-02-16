<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'App',
});
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
