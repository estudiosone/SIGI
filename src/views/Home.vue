<template>
  <div class="home">
    <nav class="navbar navbar-light bg-light sticky-top">
      <a class="navbar-brand" href="/">SIGI | {{ this.$store.state.empresa.nombre}}</a>
      <form class="form-inline my-2">
        <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Cerrar sesión</button>
      </form>
    </nav>
    <div class="home-container">
      <div class="jumbotron">
        <h1 class="display-4">Hola, Diego!</h1>
        <p class="lead">Selecciona la app que desas iniciar.</p>
        <hr class="my-4">
        <div class="card-deck" style="max-width: 480px; margin-left: auto; margin-right: auto;">
          <a class="card bg-light" >
            <div class="card-body">
              <h5 class="card-title">TPV</h5>
              <div class="text-center">
                <i class="material-icons">shopping_cart</i>
              </div>
            </div>
          </a>
          <a class="card bg-light">
            <div class="card-body">
              <h5 class="card-title">Back End</h5>
              <div class="text-center">
                <i class="material-icons">dashboard</i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

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

