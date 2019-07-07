<template>
  <div id="template">
      <div v-if="ie > 0">
          <div class="modalframe">
              <div class="positions">
                  <img src="./picture/facepalm.jpg" alt="facepalm"/>
                  <div class="innermodal">
                      <p>Hello and welcome, person from the middle ages</p>
                      <p>That what you are calling a browser is not welcome here</p>
                      <p>Please learn to use well-oiled technology and come back again</p>
                      <p>Here you can download good stuff</p>
                      <div>
                          <a href="https://www.google.com/intl/de/chrome/"><img src="https://img.icons8.com/nolan/64/000000/chrome.png"></a>
                          <a href="https://www.mozilla.org/de/firefox/new/"><img src="https://img.icons8.com/nolan/64/000000/firefox.png"></a>
                          <a href="https://www.opera.com/de/download"><img src="https://img.icons8.com/nolan/64/000000/opera.png"></a>
                      </div>
                      <div id="regDiv">
                        <p>best regards</p>
                        <p>your internet :)</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div id="secondcontent" v-if="ie == 0">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
    import NavBar from './Navbar.vue'
    import technology from './technology.vue'
    import Projects from './Projects.vue'
    import Whatido from './Whatido.vue'
    import Aboutme from './Aboutme.vue'
    import DontHitButton from './DontHit/DontHitButton.vue'
    import RiverLevel from './RiverLevel/RiverLevel.vue'
    import FitnessTrack from './FitnessTrack/FitnessTrack.vue'

export default {
  name: 'app',
  data () {
    return {
        ie: 0
    }
  },
    components: {
        NavBar,
        technology,
        Projects,
        Whatido,
        Aboutme,
        DontHitButton,
        RiverLevel,
        FitnessTrack
    },

    methods: {
        checkUserAgent() {
            if (/Trident/.test(window.navigator.userAgent) || /Internet Explorer/.test(window.navigator.appName)) {
                this.ie = 1;
            }
        }
    },

    mounted() {
        this.checkUserAgent();
    },

}

</script>

<style>
  .modalframe {
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      margin-bottom: 0%;
      overflow: auto;
      background-color: black;
      opacity: 1;
  }


  .positions {
      position: relative;
      width: 100%;
      height: 100%;
  }

  .positions > div {
      background-color: silver;
      position: absolute;
      bottom: 5%;
      margin-left: 5%;
      margin-right: 5%;
      border-radius: 20px;
      line-height: 2em;
      text-align: center;
      opacity: 0.5;
  }

  .innermodal {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
  }

  .innermodal p {
      margin-bottom: 6px;
      line-height: 1em;
  }

  .positions > img {
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0.3;
  }

  .modalframe p {
      font-family: "Berlin Sans FB";
  }

  #regDiv {
      text-align: left;
      margin-top: 10px;
  }

  #startimpressum {
    padding-bottom: 20px;
    text-align: center;
  }

  

</style>
