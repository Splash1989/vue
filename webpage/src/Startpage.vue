<template>
    <div id="startpage">
        <NavBar></NavBar>
        <div class="box">
            <div id="favconarea">
                <p class="citation">"Persönlichkeiten werden nicht durch schöne Reden geformt,
                    sondern durch Arbeit und eigene Leistung."
                </p>
                <img class="einstein" src="https://img.icons8.com/ultraviolet/80/000000/einstein.png">
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

    #namespace {
        margin-left: 20%;
        margin-top: 5%;
    }

    #favconarea {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        text-align: center;
        font-style: italic;
        font-family: "Baskerville Old Face";
        font-size: 20px;
        margin-left: 30px;
        width: 45%;
        height: 250px;
        background-color: #151515;
        border-radius: 10px;
        opacity: 0.9;
        -ms-user-select: None;
        -moz-user-select: None;
        -webkit-user-select: None;
    }

    #namespace {
        font-family: "Baskerville Old Face";
        -ms-user-select: None;
        -moz-user-select: None;
        -webkit-user-select: None;
    }


</style>