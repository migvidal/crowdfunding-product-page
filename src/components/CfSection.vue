<template>
  <component :is="tag" class="section-card">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "CfSection",
  emits: ["modalclose"],
  props: {
    tag: {
      type: String,
      validator: (value) => {
        return this.tagValues.includes(value);
      },
    },
  },
  data() {
    return {
      tagValues: ["section", "header", "footer"],
    };
  },
};
</script>

<style lang="scss" scoped>
section-card {
  margin: 2rem auto;
  padding: 2rem;
  width: clamp(250px, 600px, 90vw);
  border-radius: $radius;
  background-color: #fff;
}
</style>
