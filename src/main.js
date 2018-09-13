/* eslint-disable */
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2"; //alert box or modal
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  render: h => h(App)
});
