<template>
    <div class="container">
        <div class="leftside">
            <span>{{name}}</span>
        </div>
        <div class="rightside">
            <span class="link">
                Edit
            </span>
            <span class="link">
                Remove
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style scoped>

    .container {
        display: flex;
    }

    .leftside {
        width: 200px;
        text-align: center;
        font-size: 18px;
    }

    .rightside {
        width: 100px;
    }

    .link {
        cursor: pointer;
    }

    .link:hover {
        text-decoration: underline;
    }

</style>