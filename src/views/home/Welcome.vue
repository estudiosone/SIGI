<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<template>
    <div class="home-container">
      <div class="jumbotron text-center">
        <h1 class="display-4">Hola, Diego!</h1>
        <p class="lead">Selecciona la app que desas iniciar.</p>
        <hr class="my-4">
        <div class="card-deck" style="max-width: 480px; margin-left: auto; margin-right: auto;">
          <div class="card bg-light">
            <router-link to="/back-end/dashboard" class="btn btn-outline-dark">
              <div class="card-body">
                <h5 class="card-title">TPV</h5>
                <div class="text-center">
                  <i class="material-icons">shopping_cart</i>
                </div>
              </div>
            </router-link>
          </div>

          <div class="card bg-light">
            <router-link to="/back-end/dashboard" class="btn btn-outline-dark">
              <div class="card-body">
                <h5 class="card-title">Back End</h5>
                <div class="text-center">
                  <i class="material-icons">dashboard</i>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.home-container {
  display: grid;
  margin-bottom: 0;
  .jumbotron {
    margin-bottom: 0;
    i {
      user-select: none;
      font-size: 48px;
      margin-top: 26px;
      margin-bottom: 26px;
    }
  }
}
</style>


