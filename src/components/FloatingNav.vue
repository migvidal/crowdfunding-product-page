<template>
  <nav class="floating-menu">
    <div class="section-links">
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <cf-horizontal-sep />
        <li>
          <a href="#">Discover</a>
        </li>
        <cf-horizontal-sep />
        <li>
          <a href="#">Get Started</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import CfHorizontalSep from "./CfHorizontalSep.vue";
export default {
  components: { CfHorizontalSep },
  name: "FloatingNav",
};
</script>

<style lang="scss" scoped>
nav.floating-menu {
  position: relative;
  height: 100%;
  .section-links {
    display: block;
    background-color: #fff;
    ul {
      margin: 0;
      padding: 0;
      li {
        display: block;
        margin: 1.2rem 1rem;

        a {
          display: block;
          color: $black !important;
          font-weight: $bold;
        }
      }
    }
  }
}
</style>
