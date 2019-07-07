<template>
    <div id="whatido">
        <NavBar></NavBar>
    </div>
</template>

<script>
    import NavBar from './Navbar.vue'

    export default {
        name: "Whatido",

        components: {
            NavBar
        }
    }
</script>

<style scoped>
    #whatido {
        height: 100%;
        background-color: black;
    }

</style>