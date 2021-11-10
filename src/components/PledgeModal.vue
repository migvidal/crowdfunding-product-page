<template>
  <div class="modal">
    <h2>Back this project</h2>
    <reward-radio v-for="reward in rewards" :key="reward.id" :reward="reward" />
    <success-modal/>
    
  </div>
</template>

<script>
import RewardRadio from "./RewardRadio.vue";
import SuccessModal from "./SuccessModal.vue";

export default {
  name: "PledgeModal",
  components: {
    RewardRadio,
    SuccessModal,
  },
  props: {
    rewards: Object,
  },
};
</script>

<style scoped></style>
