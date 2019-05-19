<template>
    <div class="alert success">
        <slot name="title"/>
        <slot name="description"/>
    </div>
</template>

<script>
    export default {
        name: "Alert",
        props: ['text']
    }
</script>

<style scoped>
    .alert {
        padding: 12px 20px;
        border-radius: 5px;
        border: 1px solid transparent;
        font-size: 16px;
    }

    .success {
        background-color: #dff0d8;
        border-color: #d0e9c6;
        color: #3c763d;
    }

</style>