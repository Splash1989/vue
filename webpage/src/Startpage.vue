<template>
    <div>
        <NavBar></NavBar>
        <div>
            <p id="name">Michael Bund (B.Sc)</p>
            <p id="job">Softwaredeveloper</p>
        </div>
        <technology></technology>
    </div>
</template>

<script>
    import NavBar from './Navbar.vue'
    import technology from './technology.vue'


    export default {
        name: "Startpage",

        components: {
            NavBar,
            technology
        }
    }
</script>

<style scoped>

    #name, #job{
        font-size: 50px;
        text-align: center;
        color: white;
    }

</style>