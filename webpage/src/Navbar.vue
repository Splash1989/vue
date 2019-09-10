<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#" @click="home">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" @click="AboutMe">
                        <a class="nav-link" href="#">About me<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item" @click="WhatIDo">
                        <a class="nav-link" href="#">What i do</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Projects
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#" @click="memory">Memorycard game</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" @click="riverlevel">Riverlevel</a>
                        </div>
                    </li>
                    <li class="nav-item" @click="Impressum">
                        <a class="nav-link" href="#">Impressum</a>
                    </li>
                    <li class="nav-item" @click="intern">
                        <a class="nav-link" href="#">intern</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        methods: {
            home() {
                this.$router.push('/');
            },
            WhatIDo() {
                this.$router.push('/Whatido');
            },
            AboutMe() {
                this.$router.push('/About');
            },
            memory() {
                this.$router.push('/Memory');
            },
            riverlevel() {
                this.$router.push('/River');
            },
            Impressum() {
                this.$router.push('/Impressum');
            },
            intern() {
                this.$router.push('/intern');
            }
        }
    }
</script>
<style scoped>
    .navbar {
        opacity: 0.50;
    }

</style>