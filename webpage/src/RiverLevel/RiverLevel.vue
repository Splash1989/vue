<template>
    <div id="riverLevel">
        <trend
                :data="[waterGauge[0], waterGauge[1], waterGauge[2], waterGauge[3],
                 waterGauge[4], waterGauge[5], waterGauge[6], waterGauge[7], waterGauge[8],
                  waterGauge[9], waterGauge[10], waterGauge[11], waterGauge[12], waterGauge[13],
                   waterGauge[14]]"
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
                waterGauge: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                storage: '',
                i: 0
            }
        },

        mounted() {
            var _this = this;
            setInterval (function () {
                axios.get("https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/DRESDEN/W/currentmeasurement.json")
                    .then(response => _this.riverObject = response)
                _this.newPost();
            }, 5000);
            axios.get("https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/DRESDEN/W/currentmeasurement.json")
                .then(response => this.riverObject = response)
        },

        methods: {
            newPost() {
                if (this.storage !== this.riverObject.data.timestamp) {
                    this.storage = this.riverObject.data.timestamp;
                    this.waterGauge[this.i] = this.riverObject.data.value;
                    console.warn('HALLO HIER SPRICHT NEW POST');
                    console.warn('WATERGAUGE- - - ', this.waterGauge);
                    this.i++;
                } else {
                    console.warn('WERTE SIND GLEICH');
                }
            }

        }
    }
</script>

<style scoped>

    #riverLevel {}

    .table {
        margin-top: 20px;
    }

</style>