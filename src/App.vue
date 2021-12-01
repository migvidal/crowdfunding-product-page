<template>
  <div>
    <c-f-nav />

    <crowdfund-home />
  </div>
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
  data() {
    return {};
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
  background-size: 500px;
  background-position: top center;
  background-color: #eee;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
