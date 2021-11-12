<template>
<!--   <div class="hero-image"></div> -->
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
  background-image: url("./images/image-hero-mobile.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #eee;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .hero-image {
    height: 300px;
    margin-bottom: -60px;
  }
}
</style>
