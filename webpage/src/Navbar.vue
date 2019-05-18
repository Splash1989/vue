<template>
    <div>
        <div id="innerNavBar">
            <ul>
                <li><a>About me</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact</a></li>
                <li><a>Games</a></li>
                <li><a>Used technology</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover {
        background-color: #111;
    }
    #innerNavBar {
        opacity: 0.70;
    }

</style>