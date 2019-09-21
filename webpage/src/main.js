import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App.vue'
import Trend from "vuetrend";
import VueResource from 'vue-resource'

export const eventBus = new Vue()
const router = new VueRouter({
    routes
})

Vue.use(Trend)
Vue.use(VueRouter)
Vue.use(VueResource)

new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
