<template>
    <div id="donthitbutton">
        <NavBar></NavBar>
        <button>Dont push this button</button>
    </div>
</template>

<script>
    import NavBar from '../Navbar.vue'

    export default {
        name: "DintHitButton",

        components: {
            NavBar,
        }
    }
</script>

<style scoped>

</style>