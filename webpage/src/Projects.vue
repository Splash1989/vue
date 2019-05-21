<template>
    <div id="projects">
        <div>Memory Game</div>
        <Memory></Memory>
        <div>Other Game</div>
    </div>
</template>

<script>
    import Memory from './Memory/Memory.vue'

    export default {
        name: "Projects",
        components: {
            Memory
        }
    }
</script>

<style scoped>
    #projects {}

</style>