<template>
  <l-map class="map" :zoom="zoom" :center="[coordinates.lat, coordinates.lon]">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker :lat-lng="[coordinates.lat, coordinates.lon]"></l-marker>
  </l-map>
</template>

<script>
// LeafletMap imports
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Implement the marker icon of the map
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "MyMap",
  components: {
    "l-map": LMap,
    "l-tile-layer": LTileLayer,
    "l-marker": LMarker,
  },
  props: {
    coordinates: Object,
  },
  data() {
    return {
      url: process.env.VUE_APP_OSM_URL,
      zoom: 10,
    };
  },
};
</script>

<style>
.map {
  height: 250px !important;
}
</style>
