<template>
  <!-- if it's a reward pledge... -->
  <div v-if="reward.id > 0" :class="['reward', { selected: reward.selected }]">
    <input
      type="radio"
      name="reward"
      :checked="reward.selected"
      :ref="inputID"
      :id="inputID"
      
    />
    <label :for="inputID">
      {{ reward.name }}
      <p>Pledge ${{ reward.pledge }} or more</p>
    </label>
    <p>{{ reward.description }}</p>
  </div>
  <!-- if it's a no-reward pledge... -->
  <div v-else class="reward">
    <input type="radio" name="reward" id="no-reward" :ref="inputID" />
    <label :for="inputID"> Pledge with no reward </label>
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
