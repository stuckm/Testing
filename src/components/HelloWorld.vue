<template>
  <v-container>
    <Search />
    <h1>Home</h1>
    <h1>{{allInfo.name}}</h1>
    <p>{{allInfo.weather[0].main}}</p>
    <p>{{Math.round(allInfo.main.temp)}}</p>
    <router-link to="/help">Help</router-link>|
    <router-link to="/about">About</router-link>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import Search from "./Search.vue";

export default Vue.extend({
  name: "HelloWorld",
  components: {
    Search
  },

  computed: { ...mapGetters(["allInfo"]) },
  methods: {
    ...mapActions(["fetchWeather"])
  },
  created() {
    this.fetchWeather();
  }
});
</script>
