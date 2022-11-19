import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import type { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdSettings } from "oh-vue-icons/icons";
import { MdLogin } from "oh-vue-icons/icons";
import { MdAutorenew } from "oh-vue-icons/icons";

addIcons(MdSettings, MdLogin, MdAutorenew);

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
app.component("v-icon", OhVueIcon);

app.mount("#app");
