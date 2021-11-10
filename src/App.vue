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
body {
  font-family: 'Commissioner', sans-serif;
}
#app {
  background-color: $dark-gray;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
