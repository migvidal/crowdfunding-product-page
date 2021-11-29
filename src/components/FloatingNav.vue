<template>
  <nav class="menu">
    <div class="sections">
      <ul>
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
nav.menu {
  position: relative;
  margin: 20px auto;
  padding: 2rem;
  height: 100%;
  width: 90%;
  background-color: white;
  color: $black !important;
  .sections {
    display: block;
    background-color: #fff;
    ul > li {
      display: block;
    }
    a {
      color: $black !important;
    }
  }
}
@media screen and (max-width: $mobile) {
}
</style>
