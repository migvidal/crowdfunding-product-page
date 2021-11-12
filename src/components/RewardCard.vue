<template>
  <div v-if="reward.id > 0" class="reward">
    <h2>{{ reward.name }}</h2>
    <p>Pledge ${{ reward.pledge }} or more</p>
    <p>{{ reward.description }}</p>
    <p>
      <strong class="display-text">{{ reward.units }} </strong> left
    </p>
    <button :disabled="!reward.units">
      {{ reward.units ? "Select Reward" : "Out of Stock" }}
    </button>
  </div>
  <div v-else class="no-reward-card">
    <h2>Pledge with no reward</h2>
    <p>{{ reward.description }}</p>
  </div>
</template>

<script>
export default {
  name: "RewardCard",
  props: {
    reward: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped >

</style>

