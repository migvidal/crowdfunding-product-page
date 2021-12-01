<template>
  <nav class="floating-menu">
    <div class="section-links">
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <hr />
        <li>
          <a href="#">Discover</a>
        </li>
        <hr />
        <li>
          <a href="#">Get Started</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "FloatingNav",
  props: {},
  data() {
    return {
      visible: false,
    };
  },
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
        margin: 1.5rem 1.2rem;

        a {
          color: $black !important;
          font-weight: $bold;
        }
      }
      hr {
        border: none;
        height: 1px;
        color: $black;
      }
    }
  }
}
@media screen and (max-width: $mobile) {
}
</style>
