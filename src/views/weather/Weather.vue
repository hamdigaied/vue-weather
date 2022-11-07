<template>
  <div>
    <h1 class="text-white-50">{{ welcomeMsg }}</h1>
    <div class="row mt-4">
      <div class="col-md-8 col-lg-6 col-sm-8 col-xs-10 mx-auto">
        <div class="mb-3">
          <label for="countries-select" class="form-label text-white-50"
            >Select country</label
          >
          <select
            v-model="country"
            class="form-select bg-76889b shadow"
            id="countries-select"
            aria-label="Country list select"
          >
            <option value="" selected>Open this select menu</option>
            <option v-for="city in citiesList" :key="city" :value="city">
              {{ city }}
            </option>
          </select>
        </div>
        <WeatherDetails :data="weatherData" />
      </div>
    </div>
  </div>
</template>

<script>
import WeatherDetails from "@/components/WeatherDetails.vue";
import cities from "@/constants/cities";
import { getWeather } from "@/services/weather";

export default {
  name: "MyWeather",
  props: {
    welcomeMsg: String,
  },
  components: {
    WeatherDetails,
  },
  data() {
    return {
      country: "",
      weatherData: null,
    };
  },
  computed: {
    citiesList() {
      return cities;
    },
  },
  watch: {
    country(value) {
      if (value)
        getWeather(value)
          .then((response) => {
            this.weatherData = response.data;
          })
          .catch(() => {
            alert("An error has occured");
          });
    },
  },
};
</script>

<style></style>
