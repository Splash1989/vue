<template>
  <div>
      <router-view></router-view>
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
      msg: 'Welcome to Your Vue.js App'
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

</style>
