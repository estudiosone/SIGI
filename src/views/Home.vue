<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  mounted() {
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
      this.$router.replace('/login');
    }
    document.title = this.$store.state.system.appName + ' | Home;'
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      .then(() => {
        this.$router.replace('/login');
      })
    }
  }
})
</script>
<style lang="scss" scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons&style=outlined");
@import url("https://storage.googleapis.com/non-spec-apps/mio-icons/latest/round.css");

.home {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
}
.home-container {
  display: grid;
  margin-bottom: 0;
  .jumbotron {
    margin-bottom: 0;
    i {
      user-select: none;
      font-size: 72px;
    }
  }
}
</style>
<template>
  <div class="home">
    <nav class="navbar navbar-light bg-white border-bottom sticky-top">
      <a class="navbar-brand" href="/#/">SIGI | {{ this.$store.state.empresa.nombre}}</a>
      <form class="form-inline my-2">
        <button class="btn btn-outline-secondary my-2 my-sm-0" @click.prevent="logout">Cerrar sesión</button>
      </form>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

