import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from "v-calendar";
import "animate.css"
import "v-calendar/dist/style.css";
import "./global.css"
// import Notifications from "vue-notification";
import JwPagination from "jw-vue-pagination";
createApp(App)
  .use(VCalendar, {})
  .use(store)
  .use(router)
  .use(JwPagination)

  .mount("#app");
