<template>
    <div id="intern">
        <NavBar></NavBar>
        <div>
            <p>Please log in</p>
        </div>

        <div id="login">
            <p class="username">usernamede</p>
            <input>
            <p class="pw">password</p>
            <input>
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
    #intern {
        background-color: black;
        height: 100%;
    }
    p {
        color: white;
    }
    #login {
        display: grid;
        grid-template-columns: max-content max-content;
        grid-gap: 10px;
    }

</style>