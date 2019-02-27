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
    document.title = this.$store.state.system.appName + ' | Home';
  },
  computed: {
    displayNameFirst: () => {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        const name = currentUser.displayName;
        if (name) {
          const words = name.split(' ');
          return words[0];
        } else {
          return 'Name';
        }
      } else {
        return 'Name';
      }
    },
    userId: () => {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        return currentUser.uid;
      }
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      .then(() => {
        this.$router.replace('/login');
      });
    },
  },
});
</script>
<style lang="scss" scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons&style=outlined");
@import url("https://storage.googleapis.com/non-spec-apps/mio-icons/latest/round.css");

#app-page {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
}
.home-container-- {
  display: grid;
  margin-bottom: 0;
  .jumbotron-- {
    margin-bottom: 0;
    i {
      user-select: none;
      font-size: 72px;
    }
  }
}
</style>
<template>
  <!-- <div class="home">
    <nav class="navbar navbar-light bg-white border-bottom sticky-top">
      <a class="navbar-brand" href="/#/">SIGI | {{ this.$store.state.empresa.nombre}}</a>
      
      <div>
        <button class="btn btn-outline-secondary my-2 my-sm-0 dropdown-toggle" type="button" id="dropdownUserMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Hola, {{ this.displayNameFirst }}</button>
        <div class="dropdown-menu" aria-labelledby="dropdownUserMenu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div> -->
  <div id="app-page">
    <nav class="navbar navbar-light bg-white border-bottom sticky-top navbar-expand-sm">
      <a class="navbar-brand" href="/#/">SIGI | {{ this.$store.state.empresa.nombre}}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Hola, {{ this.displayNameFirst }}
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style="z-index: 1">
            <router-link class="dropdown-item text-right" :to="'/empresa/usuarios/' + this.userId">Perfil</router-link>
            <a class="dropdown-item text-right" href="#">Cambiar Contraseña</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-right" href="#">Cerrar Sesión</a>
          </div>
        </div>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view class="test"/>
    </transition>
  </div>
</template>

