<template>
    <div class="page-empresa">
        <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
            <icon-business class="navbar-brand icon"/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/empresa/dashboard">Dashboard <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/empresa/datos">Datos </router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ModuloBase from '../moduloBase';
export default class Empresa extends ModuloBase {

}
</script>

<style lang="scss">
.page-empresa {
    background: #e9ecef;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr; 
}
.dashboard {
    min-width: 100%;
    display: grid;
    grid-template-rows: 48px 1fr 48px;
    margin-top: 24px;
    .header {
        grid-area: 1 / 1 / 1 / 1;
    }
    .content {
        grid-area: 2 / 1 / 2 / 1;
        display: grid;
        .jumbotron-icon {
            margin: auto;
            width: 128px;
        }
    }
}
</style>

