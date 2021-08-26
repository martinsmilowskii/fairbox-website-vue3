<template lang="pug">

div(
    style="display: grid"
    :style="style"
)
    slot

</template>

<script>
import breakpoints from '@/utilities/breakpoints'
import { computed } from 'vue'

export default {
    name: 'x-grid',

    props: {
        cols: {
            type: Array,
            default: [4,3,2,1]
        },
        gap: {
            type: Number,
            default: 20
        },
        gapX: {
            type: Number,
            default: 0
        },
        gapY: {
            type: Number,
            default: 0
        },
    },

    setup(props){

        const populate = (obj) => {
            let out = ''
            if(typeof obj == 'number'){
                for(let i = 0; i < obj; i++){
                    out = out + '1fr '
                }
            }
            return out
        }

        const computedCols = computed(() => {
            if(breakpoints.phone.matches) return populate(props.cols[3])
            else if(breakpoints.tablet.matches) return populate(props.cols[2])
            else if(breakpoints.notebook.matches) return populate(props.cols[1])
            else return populate(props.cols[0])
        })

        const computedGap = computed(() => {
            let out = [props.gap, props.gap]
            if(props.gapX) out[0] = props.gapX
            if(props.gapY) out[1] = props.gapY
            return out[0] + 'px ' + out[1] + 'px'
        })

        const style = computed(() => ({
            gridTemplateColumns: computedCols.value,
            gridGap: computedGap.value
        }))

        return { style }
    },
};
</script>