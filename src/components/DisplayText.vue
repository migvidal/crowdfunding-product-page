<template>
  <strong class="big-text">
    <slot>X</slot>
  </strong>
</template>

<script>
export default {
  name: "BigText",
  props: {
    number: Number,
  },
};
</script>

<style scoped>
.big-text {
  font-size: 3rem;
}
</style>
