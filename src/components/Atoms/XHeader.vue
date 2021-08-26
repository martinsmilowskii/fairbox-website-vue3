<template lang="pug">

component(
    :is="htmlTag"
    :style="style"
)
    slot

</template>

<script>
import breakpoints from '@/utilities/breakpoints'
import { computed } from 'vue'

export default {
    name: "x-header",

    props: {
        medium: Boolean,
        fontSize: [String, Number],
        color: String,

        tag: {
            type: String,
            default: "h1"
        },

        weight: {
            type: String,
            default: "300"
        }
    },

    setup(props){

        const htmlTag = computed(() => {
            return props.tag
        })

        const computedFontSize = computed(() => {
            let fontSize = 0;

            if(props.fontSize) return props.fontSize
            if(props.medium) {
                if(breakpoints.phone.matches) fontSize = 32;
                else if(!breakpoints.phone.matches) fontSize = 40;
            }

            return fontSize;
        })

        const style = computed(() => {
            return {
                display: "block",
                letterSpacing: "0.01em",
                color: props.color,
                fontWeight: props.weight,
                fontSize: computedFontSize.value + "px",
                lineHeight: 1.4
            };
        })

        return { htmlTag, style }
    },

};
</script>