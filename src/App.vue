<template>
  <div id="app">
    <MyWeather welcomeMsg="Welcome to vue weather" />
  </div>
</template>

<script>
import MyWeather from "@/views/weather/Weather.vue";

export default {
  name: "App",
  components: {
    MyWeather,
  },
};
</script>

<style>
body {
  background-image: url("assets/bg.jpg");
  background-size: cover;
  height: calc(100vh - 20px);
}
#app {
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}
.bg-76889b {
  background-color: #76889b;
}
.shadow {
  box-shadow: 10px 11px 35px -2px rgba(0, 0, 0, 0.76) !important;
  -webkit-box-shadow: 10px 11px 35px -2px rgba(0, 0, 0, 0.76) !important;
  -moz-box-shadow: 10px 11px 35px -2px rgba(0, 0, 0, 0.76) !important;
}
</style>
