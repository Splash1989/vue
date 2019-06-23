<template>
    <div id="riverLevel">
        <NavBar></NavBar>
        <div>Riverlevel of Elbe in Dresden</div>
        <div id="graph">
            <table class="watergauge">
                <tr class="line" >{{this.newArray[0]}} cm</tr>
                <tr class="line" >{{this.newArray[this.length]}} cm</tr>
            </table>
            <trend
                    :data="[this.waterGauge[0], this.waterGauge[1], this.waterGauge[2], this.waterGauge[3],
                    this.waterGauge[4], this.waterGauge[5], this.waterGauge[6], this.waterGauge[7], this.waterGauge[8],
                    this.waterGauge[9], this.waterGauge[10], this.waterGauge[11], this.waterGauge[12], this.waterGauge[13],
                    this.waterGauge[14]]"
                    :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                    auto-draw
                    smooth
            >
            </trend>
        </div>
        <div class="timeline">
            <p class="timelineentry"  v-for="time in timeline">{{time}}</p>
        </div>
    </div>
</template>

<script>
    import NavBar from '../Navbar.vue'
    import axios from "axios";

    export default {
        name: "RiverLevel",
        components: {
            NavBar,
        },

        data () {
            return {
                riverObject: {},
                waterGauge: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                storage: '',
                timeline: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                i: 0,
                y: 0,
                z: 0,
                length: 0,
                same: 0,
                newArray: [],
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
                this.length = this.newArray.length - 1;
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
        margin-top: auto;
        margin-bottom: auto;
        display: grid;
        grid-template-columns: 1fr;
    }
</style>