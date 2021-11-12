<template>
  <nav class="menu">
    <ul>
      <li class="logo">
        <img src="../images/logo.svg" alt="" />
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
  background-color: darkblue;
  color: white;
  padding: .1rem;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    align-items: center;
    & > li {
      flex: 2;
      list-style: none;
      margin: 0 .5rem;

      &.logo {
        flex: 10;
        min-width: 120px;
      }
    }
  }
}
</style>
