import { createApp } from "vue";
import App from "./App.vue";
import CfButton from "./components/CfButton.vue";

const app = createApp(App);
app.component("cf-button", CfButton);
app.mount("#app");
