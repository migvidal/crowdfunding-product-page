<template>
  <nav class="menu">
    <div class="home">
      <a href="#"><img class="logo" src="../images/logo.svg" alt="" /></a>
    </div>
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
  name: "CFNav",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
nav.menu {
  display: flex;
  color: white;
  padding: 0.1rem;
  a {
    color: white;
    text-decoration: none;
  }
  .home {
    flex: 1 0 120px;
  }
  .sections ul {
    align-items: center;
    flex-wrap: wrap;
    & > li {
      display: inline;
      flex: 2;
      list-style: none;
      margin: 0 0.5rem;
      white-space: nowrap;
    }
  }
}
@media screen and (max-width: $mobile) {
  nav.menu {
    display: block;
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
}
</style>
