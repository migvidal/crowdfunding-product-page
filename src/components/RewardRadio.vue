<template>
  <!-- if it's a reward pledge... -->
  <div :class="['reward', { selected: reward.selected }]">
    <input
      type="radio"
      name="reward"
      :checked="reward.selected"
      :ref="inputID"
      :id="inputID"
      @change="$emit('selectoption', this.reward.id)"
      
    />
    <label :for="inputID">
      {{ reward.name || "Pledge with no reward" }}
      <p v-if="reward.pledge">Pledge ${{ reward.pledge }} or more</p>
    </label>
    <p>{{ reward.description }}</p>
  </div>
  <!-- if it's a no-reward pledge... -->
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
  methods: {},
  computed: {
    inputID() {
      return "reward-" + this.reward.id;
    },
  },
};
</script>

<style lang="scss" scoped>
/* custom radio */
input[type="radio"] {
  appearance: none;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: transparent;
  border: 5px solid white;
  box-shadow: 0 0 0 2px $dark-gray;
  cursor: pointer;
}

.reward {
  label {
    display: inline-block;
    font-weight: $bolder;
    line-height: 1;
    vertical-align: middle;
    cursor: pointer;

    p {
      font-weight: $bold;
      color: $moderate-cyan;
      margin-bottom: 0;
    }
  }
  input[type="radio"]:checked {
    background-color: $moderate-cyan;
  }
}
</style>
