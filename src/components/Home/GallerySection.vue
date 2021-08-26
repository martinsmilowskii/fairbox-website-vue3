<template lang="pug">

div.main-container

    x-space(large)

    x-header(
        tag="h1"
        color="#020203"
        weight="500"
        medium
    ) Home Gallery

    x-space(small)

    x-grid(
        :cols="[3,3,2,1]"
        :gapY="40"
        :gapX="breakpoints.phone.matches ? 40 : 50"
    )

        gallery-box(
            v-for="(box, index) in store.state.images"
            :key="index"

            :image="box.image"
            :alt="box.alt"

            :class="addClass(index) ? 'vertical-pseudo-element' : undefined"
        )

    x-space(large)

</template>

<script>
import GalleryBox from '@/components/Home/GalleryBox'
import breakpoints from '@/utilities/breakpoints'
import { onMounted, onBeforeUnmount, inject } from 'vue'

export default {
    name: 'gallery-section',

    setup(){
        const store = inject('store')

        function addClass(index) {
            let columnsAmount = breakpoints.tablet.matches ? 2 : 3

            if((index + 1) % columnsAmount === 0 && !breakpoints.phone.matches) return false
            else if(breakpoints.phone.matches) return false
            else return true
        }

        onMounted(() => window.addEventListener('resize', addClass))
        onBeforeUnmount(() => window.removeEventListener('resize', addClass))

        return { breakpoints, addClass, store }
    },

    components: {
        GalleryBox
    }

}
</script>

<style lang="sass" scoped>

.vertical-pseudo-element
    position: relative
    &::before
        content: ''
        display: flex
        position: absolute
        height: 100%
        width: 1px
        top: 0px
        right: -20px
        background-color: #020203
        z-index: 222

</style>