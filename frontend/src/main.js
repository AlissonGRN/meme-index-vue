import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import Unicon from "vue-unicons";
import {
  uniTwitter,
  uniTrashAlt,
  uniEdit,
  uniEye,
  uniImage,
  uniImagePlus,
  uniFileDownload,
} from "vue-unicons/src/icons";

Unicon.add([
  uniTwitter,
  uniTrashAlt,
  uniEdit,
  uniEye,
  uniImage,
  uniImagePlus,
  uniFileDownload,
]);
Vue.use(Unicon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
