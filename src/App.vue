<template>
  <v-app>
    <nav-drawer></nav-drawer>
    
    <toolbar></toolbar>

    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <router-view></router-view>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>

    <v-footer app class="pa-2">
      <v-progress-linear class="app-loader" :indeterminate="loading" 
        v-if="loading" height="5" success></v-progress-linear>
      <span v-if="!loading">Emanuel Tirado &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Toolbar from "./components/Toolbar";
import NavDrawer from "./components/NavDrawer";

export default {
  components: {
    Toolbar,
    NavDrawer
  },
  computed: {
    ...mapGetters([
      "loading"
    ])
  }
};
</script>
