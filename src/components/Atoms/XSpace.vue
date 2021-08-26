<template lang="pug">

div(
    :style="{height: height}"
)

</template>

<script>
import breakpoints from '@/utilities/breakpoints'
import { computed } from 'vue'

export default {
    name: 'x-space',

    props: {
        small: Boolean,
        large: Boolean,
    },

    setup(props) {

        const height = computed(() => {
            if(props.small) return '35px'
            if(props.large) {
                if(breakpoints.phone.matches) return '40px'
                else if(breakpoints.tablet.matches) return '70px'
                else return '100px'
            }
        })

        return { height }
    },
}
</script>