<template>
    <div class="card bg-light button-big-menu">
        <router-link :to='to' class="btn btn-outline-dark">
                <h6 class="card-title">{{ title }}</h6>
                <div class="text-center icon">
                    <slot/>
                </div>
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'button-big-menu',
    props: {
        title: {
            type: String,
            required: true,
            default: 'Title',
        },
        to: {
            type: String,
            required: true,
        }
    ,}
});
</script>

<style lang="scss">
    .button-big-menu {
        .icon {
            $size: 48px;
            $padding: 26px;
            width: $size;
            height: $size;
            margin: 23px 26px 22px 26px;
        }   
    }
</style>

