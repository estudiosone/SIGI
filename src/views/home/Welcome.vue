<script lang="ts">
import Vue from 'vue';
// Iconos
import UIButtonBigMenu from '../../components/ui/menu/ButtonBigMenu.vue';

export default Vue.extend({
  components: {
    UIButtonBigMenu,
  },
});
</script>

<template>
    <div class="home-container">
      <div class="jumbotron text-center">
        <h1 class="display-4">Hola, Diego!</h1>
        <p class="lead">Selecciona la app que desas iniciar.</p>
        <hr class="my-4">
        <div class="home-menu">
          <u-i-button-big-menu to="/back-end/dashboard" title="Sistema">
            <icon-system/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/empresa" title="Empresa">
            <icon-business/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/back-end/dashboard" title="Ventas">
            <icon-sale/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/back-end/dashboard" title="Inventario">
            <icon-system/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/back-end/dashboard" title="Market">
            <icon-system/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/back-end/dashboard" title="Compras">
            <icon-purchase/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/back-end/dashboard" title="Hotel">
            <icon-system/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/back-end/dashboard" title="Restaurante">
            <icon-system/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/back-end/dashboard" title="Bar">
            <icon-system/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/back-end/dashboard" title="Web Store">
            <icon-system/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/back-end/dashboard" title="Web">
            <icon-system/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/back-end/dashboard" title="Sistema">
            <icon-system/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/back-end/dashboard" title="Sistema">
            <icon-system/>
          </u-i-button-big-menu>
          <u-i-button-big-menu to="/back-end/dashboard" title="Sistema">
            <icon-system/>
          </u-i-button-big-menu>
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
  }
}
.home-menu {
  display: grid;
  grid-template-rows: repeat(auto-fill, 128px);
  grid-template-columns: repeat(auto-fill, 128px);
  grid-gap: 8px;
  margin: 0 auto;
  @media only screen and (min-width: 296px) {
    width: 264px;
  }
  @media only screen and (min-width: calc(( 128px * 3 ) + ( 8px * 2 ) + 32px )) {
    width: calc(( 128px * 3 ) + ( 8px * 2 ));
  }
  @media only screen and (min-width: calc(( 128px * 4 ) + ( 8px * 3 ) + 64px )) {
    width: calc(( 128px * 4 ) + ( 8px * 3 ));
  }
  @media only screen and (min-width: calc(( 128px * 5 ) + ( 8px * 4 ) + 64px )) {
    width: calc(( 128px * 5 ) + ( 8px * 4 ));
  }
}
</style>


