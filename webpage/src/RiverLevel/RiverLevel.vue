<template>
    <div id="riverLevel">
        <trend
                :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                auto-draw
                smooth
        >
        </trend>
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
                <td>{{this.riverObject.data.timestamp}}</td>
                <td>{{this.riverObject.data.value}}</td>
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
                riverObject: {},
            }
        },

        mounted() {
            var _this = this;
            setInterval (function () {
                axios.get("https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/DRESDEN/W/currentmeasurement.json")
                    .then(response => _this.riverObject = response)
            }, 5000);
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