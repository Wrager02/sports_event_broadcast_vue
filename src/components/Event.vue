<template>
  <div>
    <Topbar></Topbar>
    <main>
      <div class="content">
        <div>
          <h2>UPCOMING GAME</h2>
          <div class="teams">
            <div class="team">
              <div class="logo-large" v-if="team1" v-html="team1.logo"></div>
              <p v-if="team1">{{team1.name.toUpperCase()}}</p>
            </div>
            <p>vs</p>
            <div class="team">
              <div class="logo-large" v-if="team2" v-html="team2.logo"></div>
              <p v-if="team2">{{team2.name.toUpperCase()}}</p>
            </div>
          </div>
          <div class="button-div">
            <a class="button" href="https://twitch.tv" target="_blank">
              <p class="buttontext">WATCH ON TWITCH</p>
              <span></span>
              <i class="fas fa-external-link-alt onhover"></i>
            </a>
            <input type="text" value="Sorry, that didn't work!" id="copy" style="z-index: -5; position: absolute">
            <a class="share-button" @click="copyToClipboard">
              <i class="far fa-copy onhover2"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="events">
        <h4>{{this.game.toUpperCase()}}</h4>
        <div class="info-flex">
          <div class="info-main">
            <h2>SUMMER SEASON PLAYOFF'S</h2>
            <div>
              <div class="time">
                <p>16</p>
                <p>30</p>
              </div>
              <div class="team-splitter">
                <p v-if="team1">{{team1.name.toUpperCase()}}</p>
                <div class="logo-medium" v-if="team1" v-html="team1.logo"></div>
                <p class="vs">VS</p>
                <div class="logo-medium" v-if="team2" v-html="team2.logo"></div>
                <p v-if="team2">{{team2.name.toUpperCase()}}</p>

              </div>
              <div>
                <p>BEST OF 3</p>
              </div>
            </div>
          </div>
          <div class="info-additional">
            <h3 id="title-des">OTHER UPCOMING EVENTS</h3>
            <h3 id="title-mob">UP NEXT</h3>
            <div class="upcoming-games">
              <EventPreview v-show="index" :key="event.time" v-for="(event, index) in events" class="einsdrunter" :event="event"></EventPreview>
            </div>
            <div class="upcoming-games-mobile">
              <EventPreview class="einsdrunter"></EventPreview>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Topbar from "./Topbar";
import EventPreview from "./EventPreview";

export default {
  name: "Event",

  components: {
    EventPreview,
    //Slider,
    Topbar
  },
  created() {
    this.fetchEvents();
  },
  computed: {
    gamePictureUrl() {
      console.log(this.game)
      if (this.game === "Apex Legends") return "apex";
      if (this.game === "League of Legends") return "lol";
      return "overwatch"
    }
  },
  methods: {
    copyToClipboard() {
      var copyText = document.querySelector('#copy');
      copyText.value = window.location.href;
      copyText.select();
      document.execCommand("copy");
    },
    fetchEvents() {
      fetch("http://localhost:8000/api/events", {
        "method": "get"
      }).then(response => {
        response.json().then(json => {
          this.events = json;
          this.id = this.$route.params.id;
          this.event = this.events[this.id];
          this.game = this.event.game;
          this.team1 = this.event.team1[0];
          this.team2 = this.event.team2[0];

          let root = document.documentElement;

          if (this.game === "Overwatch") {
            root.style.setProperty('--color', 'hsla(316, 100%, 77%, 1)');
            root.style.setProperty('--color-hover', 'hsla(316, 90%, 70%, 1)');
          }

          if (this.game === "League of Legends") {
            root.style.setProperty('--color', 'hsla(316, 100%, 77%, 1)');
            root.style.setProperty('--color-hover', 'hsla(316, 90%, 70%, 1)');
          }

          if (this.game === "Apex Legends") {
            root.style.setProperty('--color', 'hsla(316, 100%, 77%, 1)');
            root.style.setProperty('--color-hover', 'hsla(316, 90%, 70%, 1)');
          }

          let background = document.querySelector('.content');
          background.style.background = "linear-gradient(90deg, rgba(0, 0, 0, 0.85) 16%, rgba(255, 139, 224, 0) 52%), url(\"http://cdn.sollereder.at/" + this.gamePictureUrl + ".jpg\")";
        })
      }).catch(error => {
        console.log(error)
      })
    },
    toUrl(string) {
      return string.toLowerCase().replace(" ", "-")
    }
  },
  data() {
    return {
      events: [],
      event: "",
      game: "",
      team1: undefined,
      team2:undefined,
    }
  }
}
</script>

<style scoped>

.content {
  height: calc(100vh - 560px);
  z-index: 5;
  background-image: -moz-linear-gradient(90deg, rgba(0, 0, 0, 0.85) 16%, rgba(255, 139, 224, 0) 52%), url("../assets/overwatch.jpg");
  background-image: -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0.85) 16%, rgba(255, 139, 224, 0) 52%), url("../assets/overwatch.jpg");
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.85) 16%, rgba(255, 139, 224, 0) 52%), url("../assets/thumbnails/apex.jpg");
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
  transform: translate(8px, -10px);
}

.content .teams {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  padding-bottom: 20px;
}

.content .teams > p {
  font-size: 64px;
  font-weight: 500;
  margin-right: 30px;
  margin-left: 30px;
}

.team img {
  width: 180px;
}

.team p {
  text-align: center;
  font-size: 28px;
  font-weight: 300;
  padding-top: 6px;
}

.button-div {
  display: inline-flex;
  flex-direction: row;

}

.logo-large {
  width: 180px;
  height: 180px;
  position: relative;
}

.logo-medium {
  width: 120px;
  height: 120px;
  position: relative;
}

svg {
  position: absolute;
  width: 100%;
  aspect-ratio: 1 / 1;
}

.button {
  display: inline-flex;
  padding: 12px 24px;
  background-color: white;
  width: 250px;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  text-decoration: none;
  color: black;
  transition: 0.25s ease;
}

.button:hover {
  background-color: var(--color);
}

.button:active {
  background-color: var(--color-hover);
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


.share-button {
  height: 54px;
  width: 54px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-left: 20px;
  text-decoration: none;
  transition: 0.25s ease;
}

.share-button:hover {
  background-color: var(--color);
  cursor: pointer;
}

.share-button:active {
  background-color: var(--color-hover);
}

.share-button:hover .onhover2 {
  color: white;
}

.share-button i {
  color: black;
  font-size: 20px;
  transition: 0.25s ease;
}

.events {
  height: 500px;
  width: 100%;
  background-color: #1C1C1C;

  padding: 30px 60px 0px 60px;
}

.events h4 {
  font-size: 22px;
  font-weight: 600;
  color: var(--color);
}


.info-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}


.info-main {
  flex-basis: 60%;
  color: white;
}

.info-main h2 {
  padding-bottom: 80px !important;
}

.info-main > div {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #707070;
  border-bottom: 1px solid #707070;
}

.time {
  display: flex;
  flex-direction: row;
  width: 30px;
  font-weight: 500;
}

.time :nth-child(1) {
  font-size: 36px;
}

.time :nth-child(2) {
  font-size: 23px;
  transform: translate(2px, -3px);
}

.team-splitter {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 500px;
}

.team-splitter img {
  width: 120px;
}

.team-splitter p {
  font-size: 29px;
  font-weight: 300;
}

.vs {
  color: var(--color);
  font-size: 38px !important;
  font-weight: 600 !important;
}

.info-main div:nth-child(3) {
  width: 100px;
  font-size: 24px;
  font-weight: 500;
}


.events h3 {
  color: white;
  font-size: 30px;
  font-weight: normal;
  text-align: right;
}


.info-additional {
  flex-basis: 40%;
  padding-right: 20px;
}

#title-des {
  padding-bottom: 15px;
}

#title-mob {
  display: none;
  padding-bottom: 12px;
}

.upcoming-games {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
}

.upcoming-games .einsdrunter {
  margin: 10px;
}

.upcoming-games-mobile {
  display: none;
}

.events h2 {
  color: white;
  font-size: 52px;
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
    padding-bottom: 25px;
  }

  .content h2 {
    display: none;
  }

  .content h1 {
    font-size: 60px;
    padding-bottom: 5px;
  }

  .teams {
    width: 300px;
    padding-bottom: 12px;
  }

  .team img {
    width: 75px;
  }

  .team p {
    font-size: 18px;
  }

  .content .teams > p {
    font-size: 35px;
    margin-right: 15px;
    margin-left: 15px;
  }

  .button {
    padding: 8px 16px;
    width: 180px;
  }

  .button p {
    font-size: 16px;
  }

  .button i {
    font-size: 18px;
  }

  .share-button {
    height: 40px;
    width: 40px;
    margin-left: 12px;
  }

  .share-button i {
    font-size: 16px;
  }

  .events {
    padding: 40px 40px;
  }

  .info-main {
    flex-basis: 100%;
  }


  .events h2 {
    font-size: 27px;
    padding-bottom: 35px !important;
  }

  .info-main > div {
    flex-wrap: wrap;
    padding: 10px 0;
  }

  .time :nth-child(1) {
    font-size: 20px;
  }

  .time :nth-child(2) {
    font-size: 14px;
  }

  .team-splitter {
    width: 230px;
    margin-right: 0;
  }

  .team-splitter img {
    width: 50px;
  }

  .team-splitter p {
    font-size: 17px;
  }

  .vs {
    font-size: 18px !important;
  }

  .info-main div:nth-child(3) {
    font-size: 18px;
    margin: auto;
    text-align: center;
    display: none;
  }


  .info-additional {
    flex-basis: 100%;
    padding-right: 0;
  }

  #title-mob {
    text-align: center;
    font-size: 20px;
    padding-bottom: 25px;
    padding-top: 35px;
    display: block;
  }

  #title-des {
    display: none;
  }

  .upcoming-games {
    display: none;
  }

  .upcoming-games-mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .event-preview {
    width: 280px;
  }
}
</style>