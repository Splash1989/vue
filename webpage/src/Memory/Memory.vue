<template>
    <div id="memorygame">
        <p>Eingabe</p>
        <p>How many cards?</p>
        <input id="amountofcards" placeholder="Enter number" v-model="cardamount">
        <button :disabled="isNumberEmpty" id="startbutton" @click="rendercards">Start game</button>
        <RenderCards></RenderCards>
    </div>
</template>

<script>
    import {eventBus} from '../main.js'
    import RenderCards from "./RenderCards";

    export default {
        name: "Memory",

        components: {
            RenderCards
        },

        data () {
            return {
                cardamount: '',
                startsorting: ''
            }
        },


        methods: {
            rendercards() {
                eventBus.$emit('rendercards', {
                    cardamount: this.cardamount,
                    startsorting: 1
                })
            },
        },

        computed: {
            isNumberEmpty () {
                return !this.cardamount.length
            }
        },
    }
</script>

<style scoped>
    #memorygame {}

</style>