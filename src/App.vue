<template>
  <Header />
  <Slideshow />
  <Map />
  <Footer  />
</template>

<script>
import Header from './components/Header.vue'
import Slideshow from './components/Slideshow.vue'
import Footer from './components/Footer.vue'
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    Header,
    Slideshow,
    Map,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
