<template>
    <div id="aboutme">
        <NavBar></NavBar>
        <div>About me</div>
        <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
    </div>
</template>

<script>
    import NavBar from './Navbar.vue'

    export default {
        name: "Aboutme",

        components: {
            NavBar
        }
    }
</script>

<style scoped>
    #aboutme {}

</style>