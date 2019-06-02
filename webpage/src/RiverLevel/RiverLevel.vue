<template>
    <div id="riverLevel">
        <p>Pegelstand Elbe</p>
        <img
                src="https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/DRESDEN/W/measurements.png?start=P15D&width=925&height=220"
                width="925"
                height="220"/>
        <p>{{riverObject}}</p>
        <div>
            <p>timestamp</p>
            <p>{{riverObject.data.timestamp}}</p>
            <p>hight in cm</p>
            <p>{{riverObject.data.value}}</p>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "RiverLevel",

        data () {
            return {
                riverObject: {}
            }
        },

        mounted() {
            axios.get("https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/DRESDEN/W/currentmeasurement.json")
                .then(response => this.riverObject = response)
        }
    }
</script>

<style scoped>

    #riverLevel {}

</style>