<template>
    <div id="aboutme">
        <NavBar></NavBar>
        <div>About me</div>
        <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
        <Timeline></Timeline>
    </div>
</template>

<script>
    import NavBar from './Navbar.vue'
    import Timeline from'./Timeline.vue'

    export default {
        name: "Aboutme",

        components: {
            NavBar,
            Timeline
        }
    }
</script>

<style scoped>
    #aboutme {
        background-color: white;
    }

</style>