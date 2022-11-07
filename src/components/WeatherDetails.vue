<template>
  <div v-if="data" class="card shadowmb-3 bg-76889b text-dark-50">
    <div class="d-flex p-3">
      <img :src="weatherIconUrl" class="card-img-top" alt="weather icon" />
      <h4 class="my-auto ms-2">
        {{ sanitize(data.weather[0].description) }}
      </h4>
    </div>
    <MyMap :coordinates="data.coord" />
    <div class="card-body d-flex justify-content-between">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Tooltip on top"
      >
        Tooltip on top
      </button>
      <ul class="text-start mb-0">
        <li v-for="item in Object.keys(data.main)" :key="item">
          <strong>{{ sanitize(item) }}&nbsp;:&nbsp;</strong>
          {{ data.main[item] }}&nbsp;{{ unitsMapper(item) }}
        </li>
      </ul>
      <ul class="text-start mb-0">
        <li v-for="item in Object.keys(data.wind)" :key="item">
          <strong>{{ sanitize(item) }}&nbsp;:&nbsp;</strong>
          {{ data.wind[item] }}&nbsp;{{ unitsMapper(item) }}
        </li>
        <li>
          <strong>Sunrise time&nbsp;:&nbsp;</strong
          >{{ getTimeFormTimestamp(data.sys.sunrise) }}
        </li>
        <li>
          <strong>Sunset time&nbsp;:&nbsp;</strong
          >{{ getTimeFormTimestamp(data.sys.sunset) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyMap from "@/components/Map.vue";
import { unitsMapper, getTimeFormTimestamp } from "@/utils/index";

export default {
  name: "WeatherDetails",
  props: {
    data: Object,
  },
  components: {
    MyMap,
  },
  methods: {
    sanitize(content) {
      return (content.charAt(0).toUpperCase() + content.slice(1)).replaceAll(
        "_",
        " "
      );
    },
    getTimeFormTimestamp,
    unitsMapper,
  },
  computed: {
    weatherIconUrl() {
      return `${process.env.VUE_APP_WEATHER_ICON_URL}${this.data.weather[0].icon}.png`;
    },
  },
};
</script>

<style>
img {
  width: fit-content !important;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
