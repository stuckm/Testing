<template>
  <v-container>
    <h1>{{allInfo.name}}</h1>
    <h1>Help</h1>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Help",
  computed: { ...mapGetters(["allInfo"]) }
});
</script>