<template>
  <div
    v-if="reward.id !== 0"
    :class="[
      'rounded-card',
      'reward',
      {
        disabled: reward.id !== 0 && !reward.units,
      },
    ]"
  >
    <h2>{{ reward.name }}</h2>
    <p>Pledge ${{ reward.minPledge }} or more</p>
    <p>{{ reward.description }}</p>
    <div class="flex-container">
      <p>
        <big-text>{{ reward.units || 0 }} </big-text> left
      </p>
      <cf-button @click="$emit('btnclick')" :disabled="!reward.units">
        {{ reward.units ? "Select Reward" : "Out of Stock" }}
      </cf-button>
    </div>
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
.rounded-card.reward {
  padding: 1rem;
  margin: 1rem 0;
}
.disabled {
  opacity: 0.5;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
