<template>
  <!-- if it's a reward pledge... -->
  <div v-if="reward.id > 0" class="reward">
    <label>
      <input
        type="radio"
        name="reward"
        :checked="reward.selected"
        :id="inputID"
      />
      {{ reward.name }}
      <p>Pledge ${{ reward.pledge }} or more</p>
    </label>
    <p>{{ reward.description }}</p>
  </div>
  <!-- if it's a no-reward pledge... -->
  <div v-else class="reward">
    <label>
      <input type="radio" name="reward" id="no-reward" />
      Pledge with no reward
    </label>
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

<style lang="scss" scoped>
/* custom radio */
label::before {
  content: "";
  display: inline-block;
  height: 15px;
  width: 15px;
  margin-right: 10px;
  padding: 2px;
  border-radius: 50%;
  background-color: black;
  border: 1px solid black;
}
input[type="radio"] {
  opacity: 0;
  /* vertical-align: middle;
    line-height: 1;
    cursor: pointer; */
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
  input[type="radio"]:checked + label {
  }
}
</style>
