<template>
  <CFNav />
  <CrowdfundHome />
</template>

<script>
import CrowdfundHome from "./components/CrowdfundHome.vue";
import CFNav from "./components/CFNav.vue";

export default {
  name: "App",
  components: {
    CrowdfundHome,
    CFNav,
  },
};
</script>

<style lang="scss">
@import "./assets/reset.css";
body {
  font-family: "Commissioner", sans-serif;
}
#app {
  //background-color: rgb(125, 150, 89);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
