<template>

  <div>
    <Topbar></Topbar>
    <main>
      <div class="content">
        <div>
          <h2>UPCOMING GAME</h2>
          <div class="teams">
            <div class="team">
              <img src="@/assets/team_logos/fnatic.svg">
              <p>FNATIC</p>
            </div>
            <p>vs</p>
            <div class="team">
              <img src="@/assets/team_logos/cloud9.png">
              <p>CLOUD 9</p>
            </div>
          </div>
          <div class="button-div">
            <a class="button" href="https://twitch.tv" target="_blank">
              <p class="buttontext">WATCH ON TWITCH</p>
              <span></span>
              <i class="fas fa-external-link-alt onhover"></i>
            </a>
            <a class="share-button" href="">
              <i class="fas fa-share-alt onhover2"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="events">
        <h4>OVERWATCH</h4>
        <div class="info-flex">
          <div class="info-main">
            <h2>SUMMER SEASON PLAYOFF'S</h2>
          </div>
          <div class="info-additional">
            <h3 id="title-des">OTHER UPCOMING EVENTS</h3>
            <h3 id="title-mob">UP NEXT</h3>
            <div class="upcoming-games">
              <EventPreview class="einsdrunter"></EventPreview>
              <EventPreview class="einsdrunter"></EventPreview>
              <EventPreview class="einsdrunter"></EventPreview>
              <EventPreview class="einsdrunter"></EventPreview>
            </div>
          </div>
        </div>
          <!--Slider class="event-list-mobile"></Slider-->
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
  }
}
</script>

<style scoped>
.content {
  height: calc(100vh - 560px);
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

.content .teams {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
}

.content .teams > p {
  font-size: 64px;
  font-weight: 500;
  margin-right: 30px;
}

.team img {
  width: 200px;
}

.team p {
  text-align: center;
  font-size: 28px;
  font-weight: 300;
}

.button-div {
  display: inline-flex;
  flex-direction: row;

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
  background-color: #ff8be0;
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
  color: #FF8BE0;
}


.info-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.info-main {
  flex-basis: 60%;
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
}

.upcoming-games .einsdrunter {
  margin: 10px;
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

  .info-main {
    flex-basis: 100%;
  }

  .events h2 {
    text-align: center;
  }


  .info-additional {
    flex-basis: 100%;
  }

  #title-des {
    display: none;
  }

  #title-mob {
    display: block;
  }


}
</style>