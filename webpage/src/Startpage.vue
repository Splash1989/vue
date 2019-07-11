<template>
    <div id="startpage">
        <NavBar></NavBar>
        <div class="box">
            <div id="favconarea">

            </div>
            <div id="namespace">
                <p id="name">Michael Bund (B.Sc)</p>
                <p id="job">Softwaredeveloper</p>
            </div>
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
        font-size: 30px;
        text-align: center;
        color: white;
    }

    #startpage{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .box {
        display: flex;
    }
    #favconarea {
        margin-left: 30px;
        width: 45%;
        height: 250px;
        background-color: black;
        border-radius: 10px;
    }

    #namespace {
        margin-left: 20%;
        margin-top: 5%;
    }


</style>