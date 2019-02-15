import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    // Modulo encargado de manejar datos relacionados con la UI base
    empresa: {
      state: {
        nombre: 'Chains PUB',
        razonSocial: '',
      },
    },
  },
});
