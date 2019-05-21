import Vue from 'vue'
import App from './App.vue'
export const eventBus = new Vue({
    methods: {
        renderCards (cards) {
            this.$emit('rendercards', cards)
        }
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
