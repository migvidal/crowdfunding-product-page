<template>
  <!-- if it's a reward pledge... -->
  <div :class="['reward', { selected: reward.selected }]">
    <!-- visible part -->
    <div class="radio-card">
      <input
        type="radio"
        name="reward"
        :checked="reward.selected"
        :ref="inputID"
        :id="inputID"
        @change="handleChange"
      />
      <label :for="inputID">
        {{ reward.name || "Pledge with no reward" }}
        <p v-if="reward.pledge">Pledge ${{ reward.pledge }} or more</p>
      </label>
      <p>{{ reward.description }}</p>
      <p v-if="reward.units">
        <strong>{{ reward.units }} </strong> left
      </p>
    </div>
    <!-- hidden form -->
    <MoneyForm v-if="reward.selected" @valuesubmit="handleSubmit" />
  </div>
</template>

<script>
import MoneyForm from "./MoneyForm.vue";

export default {
  name: "RewardRadio",
  components: {
    MoneyForm,
  },
  props: {
    reward: Object, // 1 reward
  },
  data() {
    return {
      
    };
  },
  methods: {
    handleChange() {
      tis.selectedPledge.id(this.reward.id)
      //this.$emit("selectoption", this.reward.id);
    },
    handleSubmit(money) {
      this.$emit("valuesubmit", money);
    },
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

.reward {
  margin: 1rem 0;
  & > * {
    padding: 1rem;
  }
  &.selected {
    border-color: $moderate-cyan;
  }
  .radio-card {
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
}
</style>
