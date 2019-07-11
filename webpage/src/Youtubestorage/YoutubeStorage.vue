<template>
    <div id="youtube">
        <NavBar></NavBar>
        <div class="content">
            <p>Uploaded hours of videocontent: {{hours}}</p>

        </div>
    </div>
</template>

<script>
    import NavBar from '../Navbar.vue'
    export default {
        name: "YoutubeStorage",

        components: {
            NavBar,
        },

        data () {
            return {
                hours: 0
            }
        },

        mounted() {
            var _this = this;
            setInterval(function () {
                _this.hours += 1;
            }, 150)
        },
    }
</script>

<style scoped>
    #youtube {
        height: 100%;
        background-color: black;
    }

    .content {
        color: white;
    }
</style>