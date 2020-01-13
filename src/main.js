// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import SweetAlert2 from "vue-sweetalert2";
import Moment from "moment";

Vue.config.productionTip = false;
Vue.use(SweetAlert2);
Vue.use(Moment);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
