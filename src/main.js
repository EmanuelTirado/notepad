import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import { sync } from "vuex-router-sync";
import "vuetify/dist/vuetify.css";

import router from "./router";
import store from "./store";
import App from "./App.vue";

Vue.use(Vuetify);
Vue.use(VueRouter);

// sync router with store
sync(store, router);

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  beforeMount() {
    this.$store.dispatch("initNotepad");
  },
  watch: {
    "$route.params.id": function(id) {
      this.$store.dispatch("setNoteFormById", +id);
    }
  }
});
