<template>
    <div id="memorygame">
        <p>Eingabe</p>
        <p>How many cards?</p>
        <input id="amountofcards" placeholder="Enter number" v-model="cardamount">
        <button :disabled="isNumberEmpty" id="startbutton" @click="rendercards">Start game</button>
        <button id="endbutton" @click="endgame">End game</button>
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
                startgame: ''
            }
        },


        methods: {
            rendercards() {
                eventBus.$emit('rendercards', {
                    cardamount: this.cardamount,
                    startgame: 1
                })
            },
            endgame() {
                eventBus.$emit('endgame', {
                    startgame: 1
                })
            }
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