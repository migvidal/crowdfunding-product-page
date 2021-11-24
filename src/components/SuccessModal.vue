<template>
  <div class="modal-bg" @keydown.esc="$emit('modalclose')" tabindex="0">
    <div class="modal">
      <h2>Thanks for your support!</h2>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button @click="$emit('modalclose')">Got it!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessModal",
  emits: ["modalclose"],
  props: {},
};
</script>

<style scoped></style>
