<template>
  <!-- if it's a reward pledge... -->
  <div v-if="reward.id > 0" class="reward">
    <input type="radio" name="reward" 
    :checked="reward.selected"
     :id="inputID"  />
    <label :for="inputID">
      {{ reward.name }}
    </label>
    <p>{{ reward.description }}</p>
  </div>
  <!-- if it's a no-reward pledge... -->
  <div v-else class="reward">
    <input type="radio" name="reward" id="no-reward" />
    <label for="no-reward"> Pledge with no reward </label>
    <p>{{ reward.description }}</p>
  </div>
</template>

<script>
export default {
  name: "RewardRadio",
  props: {
    reward: Object, // 1 reward
  },
  data() {
    return {};
  },
  computed: {
    inputID() {
      return "reward-" + this.reward.id;
    },
  },
};
</script>

<style scoped>

reward input[type=radio] {

}
</style>
