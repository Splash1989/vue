<template>
    <h3 v-if='email'>
        Thanks for logging in, {{email}}
    </h3>
</template>

<script>
    import {eventBus} from './main.js'

    export default {
        data () {
            return {
                email: ''
            }
        },


        created () {
            eventBus.$on('login', data => {
                this.email = data.email
            })
        }
    }
</script>

<style scoped>

</style>