<template>
    <div>
        <h1>{{upperCasename()}}</h1>
        <div>{{description}}</div>
        <div>{{isActive}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: 'Not set'

            },
            description: String,
            isActive: Boolean
        },
        methods: {
            upperCasename () {
                return this.name.toUpperCase ()
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: red
    }

</style>
