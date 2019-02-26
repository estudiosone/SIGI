<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'back-end,'
});
</script>
<style lang="scss" scoped>
.back-end {
  display: grid;
  grid-template-columns: 52px auto;
}
.back-end-menu {
  .btn {
    min-width: 48px;
    min-height: 48px;
    i {
      margin-top: 4px;
    }
  }
}
</style>
<style lang="scss">
.material-icons-new {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-size: contain;
    
}
.back-end-menu {
  .router-link-active {
    color: #007bff !important;
  }
}

</style>

<template>
  <div class="back-end">
    <div class="back-end-menu bg-white border-right border-left">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="btn btn-white" to="/back-end/dashboard">
            <i class="material-icons">dashboard</i>   
          </router-link>
          <router-link class="btn btn-white" to="/back-end/items">
            <i class="material-icons">shopping_basket</i>
          </router-link>
          <router-link class="btn btn-white" to="/back-end/inventory">
            <i class="material-icons">dvr</i>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
