<template>
  <div class="modal-inner">
    <h2>Thanks for your support!</h2>
    <p>
      Your pledge brings us one step closer to sharing Mastercraft Bamboo
      Monitor Riser worldwide. You will get an email once our campaign is
      completed.
    </p>
    <cf-button @click="$emit('modalclose')" tabindex="0">Got it!</cf-button>
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
