<template>
  <div v-show="this.visible" class="floating-nav-bg">
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
  </div>
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
.floating-nav-bg {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
}
nav.menu {
  position: relative;
  margin: 20px auto;
  padding: 2rem;
  height: 100%;
  width: 90%;
  background-color: white;
  border-radius: $radius;
  overflow: auto;
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
