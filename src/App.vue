<template>
  <div id="app">
    <Over class="overlay"></Over>
  </div>
</template>

<script>
import Over from './components/Over.vue'

export default {
  name: 'App',
  components: {
    Over
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
  }

#app {
  height: 100vh;
}


  .overlay {
    z-index: 5;
  }
</style>
