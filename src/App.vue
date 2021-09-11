<template>
  <v-app>
    <v-app-bar app color="#6A76AB" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Sandbox</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="toggleSearch">mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <div v-show="showSearch">
      <Search />
    </div>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Search from "./components/Search.vue";

export default Vue.extend({
  name: "App",
  components: {
    Search
  },

  data: () => ({
    showSearch: false
  }),
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    }
  }
});
</script>
