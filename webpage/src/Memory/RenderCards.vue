<template>
    <div>
        <Memory>
        </Memory>
    </div>
</template>

<script>
    import Memory from "./Memory.vue";
    import {eventBus} from '../../main.js'

    export default {
        name: "RenderCards",
        components: {Memory}
    }

    components: {
        Memory
    }
</script>

<style scoped>

</style>