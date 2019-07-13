<template>
    <div>
        <p v-if="startgame">moves {{zuege}}</p>
        <p v-if="startgame">complexity factor: </p>
        <button v-if="startgame" v-model="factor">easy</button>
        <button v-if="startgame" v-model="factor">hard</button>
        <button v-if="startgame" v-model="factor">nightmare</button>
        <div id="list">
            <div class="listfield">
                <p class="memoryfield" @click="checkCards" v-if="startgame" v-for="field in sortedFields">{{field}}</p>
            </div>
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
              zuege: 0,
              factor: 0,
              nodes: [],

              fields:
                  ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8',
                      '8', '9', '9', '10', '10', '11', '11', '12', '12', '13', '13', '14', '14',
                       '15', '15'],

              fieldshard:
                  ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8',
                  '8', '9', '9', '10', '10', '11', '11', '12', '12', '13', '13', '14', '14',
                  '15', '15'],

              fieldsnightmare:
                  ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8',
                  '8', '9', '9', '10', '10', '11', '11', '12', '12', '13', '13', '14', '14',
                  '15', '15'],
          }
        },

        created () {
            eventBus.$on('rendercards', data => {
                this.cardamount = data.cardamount,
                this.startsorting = data.startsorting,
                this.sortedFields = this.sortFields(this.fields)
            })
            eventBus.$on('remove', data => {
                this.startgame = data.startgame,
                this.zuege = 0
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

                if (/white/.test(node.target.outerHTML)) {
                    return;
                }

                if (!node) {
                    return;
                }

                this.counter = this.counter + 1;
                var _this = this;

                if (_this.counter <= 2) {
                    node.currentTarget.style.backgroundColor = 'white';
                    if(_this.counter == 2){
                        this.zuege = this.zuege + 1;
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
        border-radius: 5px;
        -ms-user-select: None;
        -moz-user-select: None;
        -webkit-user-select: None;
        transition: all .2s;
    }


    .memoryfield:hover {
        transform: scale(1.1);
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