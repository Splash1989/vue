<template>
  <div>
    <NavBar></NavBar>
    <div>
      <p id="name">Michael Bund (B.Sc)</p>
      <p id="job">Softwareentwickler</p>
    </div>
    <technology></technology>
  </div>
</template>

<script>
    import NavBar from './Navbar.vue'
    import technology from './technology.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    components: {
        NavBar,
        technology
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
