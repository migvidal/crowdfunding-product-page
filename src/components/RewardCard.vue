<template>
  <div class="reward card">
    <h2>{{ reward.name || "Pledge with no reward" }}</h2>
    <p v-if="reward.minPledge">Pledge ${{ reward.minPledge }} or more</p>
    <p>{{ reward.description }}</p>
    <p v-if="reward.units">
      <big-text>{{ reward.units }} </big-text> left
    </p>
    <cf-button
      @click="$emit('btnclick')"
      :disabled="reward.id !== 0 && !reward.units"
    >
      {{ reward.id === 0 || reward.units ? "Select Reward" : "Out of Stock" }}
    </cf-button>
  </div>
</template>

<script>
import CfButton from "./CfButton.vue";
export default {
  components: { CfButton },
  name: "RewardCard",
  props: {
    reward: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.reward.card {
  padding: 1rem;
  margin: 1rem 0;
}
</style>
