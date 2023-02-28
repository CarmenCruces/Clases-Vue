import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(store).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.min";