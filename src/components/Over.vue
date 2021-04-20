<template>
  <div>
    <Topbar></Topbar>
    <main>
      <div class="content">
        <div>
          <h2>GAME OF THE WEEK</h2>
          <h1>OVERWATCH</h1>
            <a class="button" href="Over.vue">
              <p class="buttontext">WATCH NOW</p>
              <span></span>
              <i class="fas fa-long-arrow-alt-right onhover"></i>
            </a>
        </div>
      </div>
      <div class="events">
        <h2>Upcoming Events</h2>
        <div class="event-list">
          <div class="event-thumbnail" v-for="(event, index) in events" :key="event.time">
            <router-link :to="'/event/'+ toUrl(event.game) + '/' + index">
              <img v-if="event.game === 'Overwatch'" :alt="event.game" src="@/assets/thumbnails/overwatch.jpg">
              <img v-if="event.game === 'Apex Legends'" :alt="event.game" src="@/assets/thumbnails/apex.jpg">
              <img v-if="event.game === 'League of Legends'" :alt="event.game" src="@/assets/thumbnails/lol.jpg">
            </router-link>
          </div>
        </div>
        <Slider class="mobile-slider"></Slider>
      </div>
    </main>
  </div>
</template>

<script>
import Topbar from "./Topbar";
import Slider from "./Slider";
//import Slider from "./Slider";

export default {
  name: "Over",
  components: {
    Slider,
    //Slider,
    Topbar
  },
  data() {
    return {
      events: []
    }
  },
  methods: {
    fetchEvents() {
      fetch("http://localhost:8000/api/events", {
        method: "get",
      }).then(response => {
        console.log(response);
        response.json().then(json => {
          this.events=json;
          console.log(this.events)
        })
      }).catch(error => {
        console.log(error)
      })
    },
    toUrl(string) {
      return string.toLowerCase().replaceAll(" ", "-")
    }
  },
  created() {
    this.fetchEvents();
  }
}
</script>

<style scoped>
.content {
  height: calc(100vh - 360px);
  z-index: 5;
  background-image: -moz-linear-gradient(90deg, rgba(0, 0, 0, 0.85) 16%, rgba(255, 139, 224, 0) 52%), url("../assets/overwatch.jpg");
  background-image: -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0.85) 16%, rgba(255, 139, 224, 0) 52%), url("../assets/overwatch.jpg");
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.85) 16%, rgba(255, 139, 224, 0) 52%), url("../assets/overwatch.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  display: flex;
  align-items: center;
}

.content > div {
  padding-left: 50px;
}

.content h2 {
  font-size: 22px;
  font-weight: 400;
  color: white;
  transform: translate(8px, 20px);
}

.content h1 {
  font-size: 100px;
  font-weight: 700;
  color: white;
}


.button {
  display: inline-flex;
  padding: 12px 24px;
  background-color: white;
  width: 200px;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  text-decoration: none;
  color: black;
  transition: 0.25s ease;
}

.button:hover {
  background-color: #ff8be0;
}

.button:hover .buttontext {
  color: white;
}

.button:hover .onhover {
  color: white;
  transform: translateX(5px);
}

.button p {
  font-size: 20px;
  font-weight: 500;
  transition: 0.25s ease;
}

.button i {
  font-size: 24px;
  transition: 0.25s ease;
}

.events {
  height: 300px;
  width: 100%;
  background-color: #1C1C1C;

  padding: 30px 60px;
}

.events h2 {
  color: white;
  font-size: 27px;
  font-weight: normal;
  padding-bottom: 18px;
}

.event-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.event-list > div {
  margin-left: 12px;
  margin-right: 12px;
  display: block;
}

.event-list img {
  height: auto;
  width: 100%;
  border-radius: 10px;
  transition: 0.3s ease;
}

.event-list img:hover {
  transform: scale(1.02);
}

.mobile-slider {
  display: none;
}

@media (max-width: 800px) {
  .content {
    background-position: right;
    align-items: flex-end;

    background-image: -moz-linear-gradient(0deg, rgba(0, 0, 0, 0.85) 30%, rgba(255, 139, 224, 0) 68%), url("../assets/overwatch.jpg");
    background-image: -webkit-linear-gradient(0deg, rgba(0, 0, 0, 0.85) 30%, rgba(255, 139, 224, 0) 68%), url("../assets/overwatch.jpg");
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.85) 30%, rgba(255, 139, 224, 0) 68%), url("../assets/overwatch.jpg");
  }

  .content > div {
    padding-left: 25px;
    padding-bottom: 45px;
  }

  .content h2 {
    transform: translate(2px, 18px);
    font-size: 20px;
  }

  .content h1 {
    font-size: 60px;
    padding-bottom: 5px;
  }

  .events {
    padding: 25px 50px;
  }

  .events h2 {
    text-align: center;
    padding-bottom: 30px;
  }

  .event-list {
    display: none;
  }

  .mobile-slider {
    display: block;
  }

}
</style>