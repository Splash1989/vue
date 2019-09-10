<template>
    <div id="intern">
        <NavBar></NavBar>


        <div id="login">
            <input placeholder="username">
            <input placeholder="password">
            <button>Login</button>
        </div>
    </div>
</template>

<script>
    import NavBar from '../Navbar.vue'

    export default {
        name: "intern",

        components: {
            NavBar
        }
    }
</script>

<style scoped>
    p {
        color: white;
    }
    #login {
        display: flex;
        flex-direction: column;
        margin: auto;
        width: max-content;
        margin-top: 15%;
    }
    input {
        font-size: 11px; font-family: Verdana;
        COLOR: #7F91B4;
        margin: 5px;
        padding: 7px;
        border: 2px;
        font-size: 10px;
        font-weight: bold;
        background-color: transparent;
        border: 1px;
        border-bottom-style: solid;
        border-left-style: solid;
        border-right-style: solid;
        border-top-style: solid;
        border-color: #315172;
    }
    button {
        background-color: white;
        border: 0px;
        border-radius: 6px;
    }

</style>