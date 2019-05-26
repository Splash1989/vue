<template>
    <div id="list">
        <div class="listfield">
            <p class="memoryfield" @click="checkCards" v-if="startgame" v-for="field in sortedFields">{{field}}</p>
        </div>
    </div>
</template>

<script>
    import {eventBus} from '../main.js'

    export default {
        name: "RenderCards",

        data () {
          return {
              cardamount: '',
              startsorting: '',
              startgame: '',
              sortedFields: '',
              counter: 0,
              zuege: '',

              fields: ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8',
                       '8', '9', '9', '10', '10', '11', '11', '12', '12', '13', '13', '14', '14',
                       '15', '15']
          }
        },

        created () {
            eventBus.$on('rendercards', data => {
                this.cardamount = data.cardamount,
                this.startsorting = data.startsorting,
                this.sortedFields = this.sortFields(this.fields)
            })
        },

        methods: {
            sortFields (array) {
                var currentIndex = array.length,
                    temporaryValue,
                    randomIndex;

                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                this.startgame = 1;
                return array;
            },

            checkCards (node) {
                if (!node) {
                    return;
                }

                this.counter = this.counter + 1;
                var _this = this;

                if (_this.counter <= 2) {
                    node.currentTarget.style.backgroundColor = 'white';
                    if(_this.counter == 2){
                        this.zuege += 1;
                        var nodes = document.querySelectorAll('p[style="background-color: white;"]');

                        if(nodes[0].textContent == nodes[1].textContent){
                            nodes[0].style.backgroundColor = 'green';
                            nodes[1].style.backgroundColor = 'green';
                            _this.counter = 0;
                        }

                        if(nodes[0].textContent != nodes[1].textContent){
                            setTimeout(function(){
                                nodes[0].style.backgroundColor = 'blue';
                                nodes[1].style.backgroundColor = 'blue';
                                _this.counter = 0;
                            }, 2000);
                        }
                    }
                }
            }
        }

    }

</script>

<style scoped>

    .memoryfield {
        color: blue;
        background-color: blue;
        display: inline-block;
        margin-top: 0px;
    }

    .memoryfield:hover {
        /*Kachel nach vorne Effekt*/
    }

    #list {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .listfield {
        display: grid;
        text-align: center;
        height: 500px;
        width: 500px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 1px;
    }

</style>