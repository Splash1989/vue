<template>
  <div>
      <div v-if="ie">
          <router-view></router-view>
          <div id="startimpressum">
              <router-link to="/Impressum">Impressum</router-link>
          </div>
      </div>
      <div v-if="ie == 0">
          <div class="modalframe">
              <div class="innermodal">
                  <p>Ur using Internet Explorer, really?</p>
                  <a href="https://www.google.com/intl/de/chrome/">Chrome</a>
              </div>
              <!--<div class="overlay">-->
                  <!--<img src="./picture/police.jpg" height="200" width="400" alt="police" border="2" align="right" hspace="50" vspace="50">-->
              <!--</div>-->
          </div>
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
                ie = 1;
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
  }

  .innermodal {
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.5;
  }

  .overlay {
      height: 200px;
      width: 400px;
      background-color: black;
  }


  #startimpressum {
    padding-bottom: 20px;
    text-align: center;
  }

</style>
