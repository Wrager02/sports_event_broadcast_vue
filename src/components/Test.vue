<template>
  <div v-html="svg">
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      svg: ""
    }
  },
  methods: {
    apiCall() {
      fetch("http://localhost:8000/api/events/5", {
        "method": "get"
      }).then(response => {
        response.json().then(json => {
          this.svg = json.team1[0].logo
          console.log("Test")
        })
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.apiCall();
  }
}
</script>

<style scoped>
</style>