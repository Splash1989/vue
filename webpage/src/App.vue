<template>
  <div>
    <div v-if="ie">
      <p class="internetexplorer">test</p>
    </div>
      <router-view></router-view>
    <div id="startimpressum">
      <router-link to="/Impressum">Impressum</router-link>
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
  #name {
    font-size: 60px;
    text-align: center;
    color: white;
  }
  #job {
    font-size: 30px;
    text-align: center;
    color: white;
  }

  #startimpressum {
    padding-bottom: 20px;
    text-align: center;
  }

  .internetexplorer {
    color: black;
  }

</style>
