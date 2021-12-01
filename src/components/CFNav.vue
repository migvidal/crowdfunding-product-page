<template>
  <nav class="menu">
    <div class="logo">
      <a href="#"><img src="../images/logo.svg" alt="" /></a>
    </div>
    <ul class="section-links">
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
  <div class="hamburger-icon" hidden>
    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
      <g fill="#FFF" fill-rule="evenodd">
        <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
      </g>
    </svg>
  </div>
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
  display: flex;
  align-items: center;
  color: white;
  padding: 0.1rem;
  & > * {
    margin: 1rem 10px !important;
  }

  a {
    color: white;
    text-decoration: none;
  }
  .logo {
    flex: 10;
    min-width: 100px;
  }
  ul.section-links {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0;
    & > li {
      flex: 2;
      list-style: none;
      margin: 0 0.3rem;
      white-space: nowrap;
    }
  }
}

.hamburger-icon {
  display: none;
}

@media screen and (max-width: $mobile) {
  nav.menu {
    display: none;
  }
  .hamburger-icon {
    display: block;
  }
}
</style>
