<template>
    <div id="rendercards">
        <div id="complexity">
            <p v-if="startgame">moves {{zuege}}</p>
            <p v-if="startgame">complexity factor: </p>
            <button v-if="startgame" @click="factor = 1">easy</button>
            <button v-if="startgame" @click="factor = 2">middle</button>
            <button v-if="startgame" @click="factor = 3">hard</button>
        </div>
        <div id="list">
            <div class="hintbox">
                <p class="hint" v-if="showHint">Choose an other card, dude</p>
            </div>
            <div class="listfield">
                <p class="memoryfield" v-html="field.favicon" @click="checkCards" v-if="startgame" v-for="field in sortedFields">{{field.favicon}}</p>
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
              startsorting: '',
              startgame: 1,
              sortedFields: '',
              showHint: 0,
              counter: 0,
              zuege: 0,
              factor: 0,
              nodes: [],

              fields: [
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios/40/000000/javascript.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios/40/000000/javascript.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/react-native.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/react-native.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios-filled/40/000000/html-5.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios-filled/40/000000/html-5.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios/40/000000/css3.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios/40/000000/css3.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/nodejs.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/nodejs.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/angularjs.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/angularjs.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/npm.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/npm.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios/40/000000/git.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios/40/000000/git.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/nolan/40/000000/github.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/nolan/40/000000/github.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/bootstrap.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/bootstrap.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios-filled/40/000000/jquery.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios-filled/40/000000/jquery.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/java-coffee-cup-logo.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/java-coffee-cup-logo.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios-filled/40/000000/c-plus-plus-logo.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios-filled/40/000000/c-plus-plus-logo.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/nolan/40/000000/json.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/nolan/40/000000/json.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios/40/000000/c.png">'},
                  {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios/40/000000/c.png">'},
              ],

              fieldseasy:
                  [
                      {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios/40/000000/javascript.png">'},
                      {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios/40/000000/javascript.png">'},
                      {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/react-native.png">'},
                      {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/react-native.png">'},
                      {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios-filled/40/000000/html-5.png">'},
                      {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios-filled/40/000000/html-5.png">'},
                      {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios/40/000000/css3.png">'},
                      {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/ios/40/000000/css3.png">'},
                      {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/nodejs.png">'},
                      {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/nodejs.png">'},
                      {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/angularjs.png">'},
                      {favicon: '<img style="visibility: hidden" src="https://img.icons8.com/color/40/000000/angularjs.png">'},
                  ],

              fieldsnightmare:
                  [

                  ],
          }
        },

        created () {
            eventBus.$on('rendercards', data => {
                this.startsorting = data.startsorting,
                    this.sortedFields = this.sortFields(this.fields)
                 this.testmethod();
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

            testmethod () {
                console.warn('Ausgelöst bruder', this.factor);
                if (this.factor === 1) {
                    console.warn('- - call 1 - - ');
                    this.sortedFields = this.sortFields(this.fieldseasy)
                } else if (this.factor === 2) {
                    console.warn('- - call 2 - - ');
                    this.sortedFields = this.sortFields(this.fields)
                } else if (this.factor === 3) {
                    console.warn('- - call 3 - - ');
                    this.sortedFields = this.sortFields(this.fields)
                }
            },

            checkCards (node) {

                if (/white/.test(node.target.outerHTML) || /visible/.test(node.target.style.cssText)) {
                    _this = this;
                    this.showHint = 1;
                    setTimeout(function () {
                        _this.showHint = 0;
                    }, 2000);
                    return;
                }

                if (/green/.test(node.target.outerHTML)) {
                    _this = this;
                    this.showHint = 1;
                    setTimeout(function () {
                        _this.showHint = 0;
                    }, 2000);
                    return;
                }

                if (!node) {
                    return;
                }

                this.counter = this.counter + 1;
                var _this = this;

                if (_this.counter <= 2) {
                    node.currentTarget.style.backgroundColor = 'white';
                    node.currentTarget.querySelector('img').style.visibility = 'visible';

                    if(_this.counter == 2){
                        this.zuege = this.zuege + 1;
                        var nodes = document.querySelectorAll('p[style="background-color: white;"]');

                        if(nodes[0].innerHTML == nodes[1].innerHTML){
                            nodes[0].style.backgroundColor = 'green';
                            nodes[1].style.backgroundColor = 'green';
                            setTimeout(function () {
                                nodes[0].style.opacity = 0;
                                nodes[1].style.opacity = 0;
                            }, 1500);
                            _this.counter = 0;
                        }

                        if(nodes[0].innerHTML != nodes[1].innerHTML){
                            setTimeout(function(){
                                nodes[0].style.backgroundColor = 'blue';
                                nodes[1].style.backgroundColor = 'blue';
                                nodes[0].querySelector('img').style.visibility = 'hidden';
                                nodes[1].querySelector('img').style.visibility = 'hidden';

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

    #rendercards {
        background-color: black;
        display: flex;
        padding: 20px;

    }

    #complexity {
        margin-top: 90px;
        margin-right: 20px;
        color: white;
    }

    .hintbox {
        position: absolute;
        top: 130px;
    }

    .hint {
        color: black;
        background-color: red;
        border-radius: 5px;
        padding: 3px;
        opacity: 0.6;
        z-index: 1000;
    }

    .memoryfield {
        color: blue;
        background-color: blue;
        display: inline-block;
        margin-top: 0px;
        border-radius: 5px;
        border: solid 3px black;
        -ms-user-select: None;
        -moz-user-select: None;
        -webkit-user-select: None;
        transition: all .4s;
    }

    .memoryfield:hover {
        transform: scale(1.3);
    }

    #list {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    #memoryfield img {
        visibility: hidden;
    }

    .listfield {
        display: grid;
        text-align: center;
        height: 500px;
        width: 500px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 1px;
    }

</style>  