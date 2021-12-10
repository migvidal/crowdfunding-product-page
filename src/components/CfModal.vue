<template>
  <div
    class="modal-bg"
    @keydown.esc="$emit('modalclose')"
    @click="handleBgClick"
    tabindex="0"
  >
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CfModal",
  computed: {
    hasSlot() {
      return !!this.$slots.default;
    },
  },
  methods: {
    handleBgClick(e) {
      //closes modal when bg clicked
      if (e.target.classList.contains("modal-bg")) {
        this.$emit("modalclose");
      }
    },
  },
};
</script>

<!-- Scoped styles -->
<style lang="scss" scoped>
.modal-bg {
  display: flex;
  align-items: center;
  justify-content: center;
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
.modal {
  position: relative;
  //margin: 60px auto;
  max-width: 90%;
  max-height: 90%;
  background-color: white;
  border-radius: $radius;
  overflow: auto;
}
</style>
