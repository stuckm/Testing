<template>
  <v-container>
    <h1>Search: {{text}}</h1>
    <v-form @submit="onSubmit">
      <v-text-field v-model="text"></v-text-field>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "Search",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    ...mapActions(["newWeather"]),
    onSubmit(e: { preventDefault: () => void }) {
      e.preventDefault();
      this.newWeather(this.text);
      this.text = "";
    }
  }
});
</script>