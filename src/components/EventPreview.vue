<template>
  <a class="event-preview" href="">
    <div class="preview-flex">
      <div>
        <img src="@/assets/team_logos/fnatic.svg">
        <p>FNATIC</p>
      </div>
      <span></span>
      <div>
        <img src="@/assets/team_logos/fnatic.svg">
        <p>FNATIC</p>
      </div>
    </div>
    <p>26 / 04 / 21</p>
  </a>
</template>

<script>
export default {
  name: "EventPreview",
  props: {
    event: Object
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