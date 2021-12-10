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
    <div class="flex-container">
      <h2 class="reward-name">{{ reward.name }}</h2>
      <p class="min-pledge">Pledge ${{ reward.minPledge }} or more</p>
    </div>
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

<style lang="scss" scoped>
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
.min-pledge {
  font-weight: bold;
  color: $moderate-cyan;
}
</style>
