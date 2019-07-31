<template>
    <div id="memorygame">
        <NavBar></NavBar>
        <div id="gamecontrole">
            <button id="startbutton" @click="rendercards">Start game</button>
            <button @click="remove">End game</button>
        </div>
        <RenderCards></RenderCards>
    </div>
</template>

<script>
    import {eventBus} from '../main.js'
    import RenderCards from "./RenderCards";
    import NavBar from '../Navbar.vue'

    export default {
        name: "Memory",

        components: {
            RenderCards,
            NavBar
        },

        data () {
            return {
                cardamount: '',
                startgame: 0,
                startsorting: '',
            }
        },


        methods: {
            rendercards() {
                eventBus.$emit('rendercards', {
                    cardamount: this.cardamount,
                    startsorting: 1,
                })
            },
            remove() {
                eventBus.$emit('remove', {
                    startgame: 0
                })
            },
        },

        computed: {
        },
    }
</script>

<style scoped>
    #memorygame {
        background-color: black;
    }

</style>