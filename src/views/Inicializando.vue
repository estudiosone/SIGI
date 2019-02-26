<template>
    <div id="inicializando">
        <img id="login-form-logo" src="../assets/logo.png" class="card-img-top" alt="...">
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    computed: {
        navegacionOperativa(): any {
            return this.$store.state.navegacion.operativa;
        },
    },
    watch: {
        navegacionOperativa(navegacionOperativa) {
            if (navegacionOperativa) {
                this.$router.replace(this.$store.state.navegacion.a);
            }
        },
    },
});
</script>

<style lang="scss" scoped>
#inicializando {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr, 192px, 1fr;
    grid-template-columns: 1fr, 192px, 1fr;
}
img {
    width: 192px;
    height: 192px;
    grid-area: 2 / 2 / 2 / 2;
}
</style>
