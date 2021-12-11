<template>
  <!-- if it's a reward pledge... -->
  <div
    :class="[
      'reward',
      { selected: reward.selected },
      { disabled: reward.units === 0 },
    ]"
  >
    <!-- visible part -->
    <div class="radio-part">
      <input
        type="radio"
        name="reward"
        class="radio-button"
        :disabled="reward.units === 0"
        :checked="reward.selected"
        :ref="inputID"
        :id="inputID"
        @change="handleChange"
      />
      <div class="info">
        <label class="info-label" :for="inputID">
          <span class="info-label-name">{{
            reward.name || "Pledge with no reward"
          }}</span>
          <wbr />
          <span class="info-label-pledge" v-if="reward.minPledge">
            Pledge ${{ reward.minPledge }} or more
          </span>
        </label>
        <p class="info-reward-description">{{ reward.description }}</p>
        <p class="info-reward-units" v-if="reward.units">
          <strong>{{ reward.units }} </strong> left
        </p>
      </div>
    </div>
    <!-- hidden form -->
    <MoneyForm
      v-if="reward.selected"
      :minPledge="reward.minPledge"
      @valuesubmit="handleSubmit"
    />
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

  methods: {
    handleChange() {
      this.$emit("selectoption", this.reward.id);
    },
    handleSubmit(money) {
      this.$emit("valuesubmit", this.reward.id, money);
    },
  },
  computed: {
    inputID() {
      return "reward-" + this.reward.id;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.reward {
  margin: 1rem 0;
  &.disabled {
    opacity: 0.5;
  }
  & > * {
    padding: 1rem;
  }
  &.selected {
    border-color: $moderate-cyan;
  }
}
.radio-part {
  display: flex;
  flex-wrap: wrap;
}
.radio-button {
  appearance: none;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: transparent;
  border: 5px solid white;
  box-shadow: 0 0 0 2px #eee;
  cursor: pointer;
  &:checked {
    background-color: $moderate-cyan;
  }
  &:disabled {
    cursor: not-allowed;
  }
}
.info {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.info-label {
  font-weight: $bolder;
  line-height: 1;
  vertical-align: middle;
  & > span {
    white-space: nowrap;
  }
}
.info-label-name {
  margin-right: 1rem;
}
.info-label-pledge {
  font-weight: $bolder;
  color: $moderate-cyan;
  margin-bottom: 0;
}
</style>
