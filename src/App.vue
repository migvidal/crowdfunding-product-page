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
  color: rgb(95, 95, 95);
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  color: initial;
}

#app {
  background-image: url("./images/image-hero-mobile.jpg");
  background-repeat: no-repeat;
  background-size: 500px;
  background-position: top center;
  background-color: #eee;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .hero-image {
    height: 300px;
    margin-bottom: -60px;
  }
}
</style>
