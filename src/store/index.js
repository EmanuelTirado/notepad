import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const state = {
  notes: [],

  drawer: false,

  noteForm: {
    id: null,
    title: "",
    category: null,
    content: ""
  },
  
  status: {
    loading: false,
    error: false,
    errorMsg: "",
    success: true
  },

  settings: {
    fontSize: 10
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
