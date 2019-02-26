import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navegacion: {
      operativa: false,
      a: '',
      desde: undefined,
  },
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    // Modulo de manejo de datos de sistema
    system: {
      state: {
        appName: 'SIGI',
      },
    },
    // Modulo encargado de manejar datos relacionados con la UI base
    empresa: {
      state: {
        nombre: 'Chains PUB',
        razonSocial: '',
      },
    },
  },
});
