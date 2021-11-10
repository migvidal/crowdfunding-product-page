<template>
  <div class="lightbox">
    <nav>
      <ul>
        <li>About</li>
        <li>Discover</li>
        <li>Get Started</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "BackingModal",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
