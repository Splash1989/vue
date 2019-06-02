import Vue from 'vue'
import App from './App.vue'
import Trend from "vuetrend";
export const eventBus = new Vue()
Vue.use(Trend)

new Vue({
  el: '#app',
  render: h => h(App)
})
