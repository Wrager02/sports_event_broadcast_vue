<template>
  <div class="swiper-container" v-if="ready">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(event,index) in events" :key="event.time">
        <router-link :to="'/event/'+ toUrl(event.game) + '/' + index">
          <img v-if="event.game === 'Overwatch'" :alt="event.game" src="@/assets/thumbnails/overwatch.jpg">
          <img v-if="event.game === 'Apex Legends'" :alt="event.game" src="@/assets/thumbnails/apex.jpg">
          <img v-if="event.game === 'League of Legends'" :alt="event.game" src="@/assets/thumbnails/lol.jpg">
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import Swiper from 'swiper';

// Import Swiper styles
import 'swiper/swiper.min.css';

export default {
  data() {
    return {
      events: [],
      ready: false
    }
  },
  created() {
    this.fetchEvents();
  },
  methods: {
    async slideNext() {
      this.swiper.slideNext();
      setTimeout(this.slideNext, 5000);
    },

    toUrl(string) {
      console.log("String:", string.replaceAll(" ", "-"))
      return string.toLowerCase().replaceAll(" ", "-")
    },
    fetchEvents() {
      console.log("Fetch events")
      fetch("http://localhost:8000/api/events", {
        method: "get",
      }).then(response => {
        response.json().then(json => {
          this.events = json;
          console.log(this.events)

          this.ready = true;

          this.swiper = new Swiper(".swiper-container", {
            init: true,
            slidesPerView: "auto",
            direction: "horizontal",
            spaceBetween: 50,
            loop: true,
            speed: 800,
          });

          setTimeout(this.slideNext, 5000);
        })
      }).catch(error => {
        console.log(error)
      })
    },
  }
};
</script>
<style>
.swiper-slide img {
  height: auto;
  width: 100%;
  border-radius: 10px;
  transition: 0.3s ease;
}

.swiper-slide img:hover {
  transform: scale(1.02);
}
</style>