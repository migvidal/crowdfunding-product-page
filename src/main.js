import { createApp } from "vue";
import App from "./App.vue";
// Global components
import CfButton from "./components/CfButton.vue";
import DisplayText from "./components/DisplayText.vue.vue";
import BookmarkButton from "./components/BookmarkButton.vue";

const app = createApp(App);
app.component("cf-button", CfButton);
app.component("big-text", DisplayText);
app.mount("#app");