<template>
  <button tabindex="0">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "CfButton",
  props: {
    emittedEvent: String,
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 999px;
  padding: 1rem;
  white-space: nowrap;
  color: #fff;
  font-weight: bold !important;
  background-color: $moderate-cyan;
  max-width: 230px;
  cursor: pointer;
  &:hover {
    background-color: $dark-cyan;
  }
  &:disabled {
    background-color: #ccc;
    cursor: default;
  }
}
</style>
