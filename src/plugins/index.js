/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/store'
import router from '@/router'
import pahoMqtt from './pahoMqtt'
import VueApexCharts from "vue3-apexcharts";



export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(pahoMqtt)
    .use(VueApexCharts)
}
