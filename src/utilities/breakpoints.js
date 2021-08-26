import useBreakpoints from "vue-next-breakpoints"

const fallbackBreakpoints = {
    phone: 520,
    tablet: 960,
    notebook: 1240,
    desktop: 1600,
}

let breakpoints = useBreakpoints({
    phone: fallbackBreakpoints.phone,
    tablet: fallbackBreakpoints.tablet,
    notebook: fallbackBreakpoints.notebook,
    desktop: fallbackBreakpoints.desktop,
    display: [fallbackBreakpoints.desktop + 1]
})

export default breakpoints