<template>
    <div id="riverLevel">
        <img
                src="https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/DRESDEN/W/measurements.png?start=P15D&width=925&height=220"
                width="925"
                height="220"/>
        <!--<p>{{riverObject}}</p>-->
        <table class="table table-hover table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">timestamp</th>
                <th scope="col">hight in cm</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>{{riverObject.data.timestamp}}</td>
                <td>{{riverObject.data.value}}</td>
            </tr>
            </tbody>
        </table>


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

    .table {
        margin-top: 20px;
    }

</style>