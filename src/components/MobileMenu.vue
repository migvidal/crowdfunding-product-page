<template>
  <nav class="modal-inner">
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
  name: "MobileMenu",
};
</script>

<style lang="scss" scoped>
.modal-inner {
  position: relative;
  width: 85vw;
  height: 100%;
}
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
</style>
