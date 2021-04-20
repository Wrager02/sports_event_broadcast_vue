<template>
  <router-link class="event-preview" :to="'/event/'+ toUrl(event.game) + '/' + (event.id-1)">
    <div class="preview-flex">
      <div>
        <img src="@/assets/team_logos/fnatic.svg">
        <p v-if="event">{{event.team1[0].name.toUpperCase()}}</p>
      </div>
      <span></span>
      <div>
        <img src="@/assets/team_logos/fnatic.svg">
        <p v-if="event">{{event.team2[0].name.toUpperCase()}}</p>
      </div>
    </div>
    <p>{{ event.time.replace("T", " ").replace("Z", "") }}</p>
  </router-link>
</template>

<script>
export default {
  name: "EventPreview",
  props: {
    event: Object
  },
  methods: {
    toUrl(string) {
      console.log("String:", string.replaceAll(" ", "-"))
      return string.toLowerCase().replaceAll(" ", "-")
    }
  }
}
</script>

<style scoped>
.event-preview {
  width: 300px;
  border: 1px solid #707070;
  border-radius: 15px;
  padding: 4px;
  text-decoration: none;
  transition: 0.25s ease;
}

.event-preview:hover {
  border: 1px solid #ff8be0;
}

.preview-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  color: white;
  font-weight: 500;
}

.preview-flex div {
  width: 35%;
}

.preview-flex img {
  width: 70%;
  margin: auto;
}


.preview-flex span {
  height: 7vh;
  border: 1px solid  #707070;
}

.event-preview > p {
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 5px 0;
}

</style>