import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/axios";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

/**
 * 1. template
 * 1. data binding
 * 1. method
 * 1. component
 * 1. v-if & v-for & v-show
 * 1. event
 * 1. props & emit
 * 1. slot
 * 1. router
 * 1. computed
 * 1. watch
 * 1. lifecycle
 * 1. vuex
 * 1. bootstrap-vue
 */
