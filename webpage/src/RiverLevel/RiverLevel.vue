<template>
    <div id="riverLevel">
        <div id="graph">
            <table class="watergauge">
                <tr v-for="level in newArray">{{level}} cm</tr>
            </table>
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
        </div>
        <div class="timeline">
            <p class="timelineentry"  v-for="time in timeline">{{time}}</p>
        </div>
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
                timeline: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                i: 0,
                y: 0,
                z: 0,
                same: 0,
                newArray: []
            }
        },

        mounted() {
            var _this = this;
            setInterval (function () {
                axios.get("https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/DRESDEN/W/measurements.json?start=P15D")
                    .then(response => _this.riverObject = response);
                _this.newPost();
            }, 5000);
            axios.get("https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/DRESDEN/W/measurements.json?start=P15D")
                .then(response => this.riverObject = response)
        },

        methods: {

            getTableLevel() {
                this.newArray = [];
                this.waterGauge.forEach(a => {
                    this.same = this.newArray.find(x => x == a);
                    if (!this.same) {
                        this.newArray.push(a);
                    }
                });
                this.newArray.sort();
                this.newArray.reverse();
            },

            newPost() {
                var _this = this;

                if (this.storage !== this.riverObject.data[1439].timestamp) {
                    this.storage = this.riverObject.data[1439].timestamp;
                    this.z = 0;
                    for (this.y = 1424; this.y <= 1439; this.y++) {
                        this.waterGauge[this.z] = this.riverObject.data[this.y].value;

                        this.timeline[this.z] = this.riverObject.data[this.y].timestamp.replace(/(^.{11})/gm, '');
                        this.timeline[this.z] =  this.timeline[this.z].replace(/(...\+.*)/gm, '');

                        this.z++
                    }
                }
                _this.getTableLevel();
            }

        }
    }
</script>

<style scoped>

    #riverLevel {}

    .timeline {
        display: flex;
        text-align: center;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 1px;
        background-color: #ffffff;
        margin-left: 30px;
        justify-content: space-around;
    }

    #graph {
        display: flex;
        grid-template-colums: 1fr 1fr;
    }

    .watergauge {
    }

    .table {
        margin-top: 20px;
    }

</style>