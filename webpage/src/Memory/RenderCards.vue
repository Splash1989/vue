<template>
    <div>
        <p>{{startgame}}</p>
        <ul class="listfield">
            <li class="memoryfield" v-if="startgame" v-for="field in fields">{{field.value}}</li>
        </ul>
    </div>
</template>

<script>
    import {eventBus} from '../main.js'

    export default {
        name: "RenderCards",

        data () {
          return {
              cardamount: '',
              startgame: '',

              fields: [
                  {id: 1, value: 1, isActive: true},
                  {id: 2, value: 2, isActive: true},
                  {id: 3, value: 3, isActive: true},
                  {id: 4, value: 4, isActive: true},
                  {id: 5, value: 5, isActive: true},
                  {id: 6, value: 6, isActive: true},
                  {id: 7, value: 7, isActive: true},
                  {id: 8, value: 8, isActive: true},
                  {id: 9, value: 9, isActive: true},
                  {id: 10, value: 10, isActive: true},
                  {id: 11, value: 11, isActive: true},
                  {id: 12, value: 12, isActive: true},
                  {id: 13, value: 13, isActive: true},
                  {id: 14, value: 14, isActive: true},
                  {id: 15, value: 15, isActive: true},
                  {id: 16, value: 16, isActive: true},
                  {id: 17, value: 17, isActive: true},
                  {id: 18, value: 18, isActive: true},
                  {id: 19, value: 19, isActive: true},
                  {id: 20, value: 20, isActive: true},
                  {id: 21, value: 21, isActive: true},
                  {id: 22, value: 22, isActive: true},
                  {id: 23, value: 23, isActive: true},
                  {id: 24, value: 24, isActive: true},
                  {id: 25, value: 25, isActive: true},
              ]
          }
        },

        created () {
            eventBus.$on('rendercards', data => {
                this.cardamount = data.cardamount,
                this.startgame = data.startgame
            })
        },

        methods: {

        }

    }

</script>

<style scoped>

    .listfield {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 5px;
    }

</style>