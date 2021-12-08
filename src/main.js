import { createApp } from "vue";
import App from "./App.vue";
// Global components
import CfButton from "./components/CfButton.vue";
import DisplayText from "./components/DisplayText.vue";
import BookmarkButton from "./components/BookmarkButton.vue";
import CfVerticalSep from "./components/CfVerticalSep.vue";
import CfHorizontalSep from "./components/CfHorizontalSep.vue";

const app = createApp(App);
app.component("cf-button", CfButton);
app.component("big-text", DisplayText);
app.component("bookmark-button", BookmarkButton);
app.component("cf-vertical-sep", CfVerticalSep);
app.component("cf-horizontal-sep", CfHorizontalSep);
app.mount("#app");
