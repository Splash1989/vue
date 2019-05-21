<template>
    <div id="memorygame">
        <p>Eingabe</p>
        <p>How many cards?</p>
        <input id="amountofcards" placeholder="Enter number" v-model="cardamount">
        <button :disabled="isNumberEmpty" id="startbutton" @click="rendercards">Start game</button>
    </div>
</template>

<script>
    export default {
        name: "Memory",

        data () {
            return {
                cardamount: ''
            }
        },

        methods: {
            rendercards() {
                console.warn('Hello Word', this.cardamount);
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