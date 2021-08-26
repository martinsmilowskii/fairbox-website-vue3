<template lang="pug">

div
    v-card(
        flat
        tile

        @mouseover="isHovering = true"
        @mouseleave="isHovering = false"

        style="height: 100%"
    )

        .box-full-size(class="d-flex align-center")
            img.img-cover.element-transition(
                :src="image"
                :alt="alt"

                :style="{transform: isHovering && !breakpoints.tablet.matches ? 'scale(1.1)' : 'scale(1)', 'max-height' : breakpoints.phone.matches ? '330px' : undefined}"
            )

</template>

<script>
import breakpoints from '@/utilities/breakpoints'
import { ref } from 'vue'

export default {
    name: 'gallery-box',

    setup(){
        const isHovering = ref(false)

        return { breakpoints, isHovering }
    },

    props: {
        image: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
    },
}
</script>