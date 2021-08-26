<template lang="pug">

v-app.overflow-hidden
    router-view

</template>

<script>
import { provide } from 'vue'
import store from '@/store'

export default {
    name: 'App',

    setup(){
        provide('store', store)
    }
};
</script>

<style lang="sass">
@import 'assets/global'
</style>