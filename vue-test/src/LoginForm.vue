<template>
    <div>
        <h3>Login Form</h3>
        <div>
            <div>
                <label>E-Mail:</label>
                <input type="text" v-model="email"/>
            </div>
            <div>
                <label>Passwort</label>
                <input type="password" v-model="passwort"/>
            </div>
            <div>
                <button @click="login">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from './main.js'
    export default {
        data () {
            return {
                email: '',
                passwort: ''
            }
        },

        methods: {
            login () {
                eventBus.$emit('login', {
                    email: this.email,
                    passwort: this.passwort
                })
            }

        }

    }
</script>

<style scoped>

</style>