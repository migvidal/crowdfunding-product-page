<template>
  <nav class="menu">
    <ul>
      <li class="logo">
        <a href="#"><img src="../images/logo.svg" alt="" /></a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Discover</a>
      </li>
      <li>
        <a href="#">Get Started</a>
      </li>
    </ul>
  </nav>
  <cf-modal v-show="this.mobileMenuVisible">
    <floating-nav />
  </cf-modal>
</template>

<script>
import CfModal from "./CfModal.vue";
import FloatingNav from "./FloatingNav.vue";

export default {
  name: "CFNav",
  components: {
    CfModal,
    FloatingNav,
  },
  props: {
    msg: String,
  },
  data() {
    return { mobileMenuVisible: false };
  },
};
</script>

<style lang="scss" scoped>
nav.menu {
  //background-color: darkblue;
  color: white;
  padding: 0.1rem;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    & > li {
      flex: 2;
      list-style: none;
      margin: 0 0.5rem;
      white-space: nowrap;

      &.logo {
        flex: 10;
        min-width: 120px;
      }
    }
  }
}
</style>
