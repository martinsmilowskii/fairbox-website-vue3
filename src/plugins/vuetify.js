import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

export default createVuetify({
    components,
    directives,
    display: {
        thresholds: {
            xs: 576,
            sm: 768,
            md: 992,
            lg: 1200,
            xl: 1600,
        },
      },
})
