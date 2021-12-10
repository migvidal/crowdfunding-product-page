<template>
  <div>
    <crowdfund-home :initialMobileMenuVisible="this.mobileMenuVisible" />
  </div>
</template>

<script>
import CrowdfundHome from "./components/CrowdfundHome.vue";

export default {
  name: "App",
  components: {
    CrowdfundHome,
  },
  data() {
    return { mobileMenuVisible: false };
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

p {
  margin: 1rem 0;
}

h1 {
  line-height: 1.3;
}

#app {
  background-image: url("./images/image-hero-mobile.jpg");
  background-repeat: no-repeat;
  background-size: 750px;
  background-position: center -15%;
  background-color: #eee;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media screen and (min-width: $tablet) {
  #app {
    background-image: url("./images/image-hero-desktop.jpg");
    background-size: 1920px;
  }
}
</style>
