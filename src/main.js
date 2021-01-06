import "@/assets/css/tailwinds.css";
import axios from "axios";
import { createApp } from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
app.use(VueAxios, axios);
