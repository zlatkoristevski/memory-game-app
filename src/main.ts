import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import type { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

const toastOptions: PluginOptions = {
  // You can set your default options here
};
app.use(Toast, toastOptions);

app.mount("#app");
