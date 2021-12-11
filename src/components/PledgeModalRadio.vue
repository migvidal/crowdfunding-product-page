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
      <div class="radio-and-labels" :for="inputID">
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
        <div class="labels" :for="inputID">
          <label class="info-header-label">
            {{ reward.name || "Pledge with no reward" }}
          </label>
          <span class="info-header-pledge" v-if="reward.minPledge">
            Pledge ${{ reward.minPledge }} or more
          </span>
          <span class="info-reward-units_right" v-if="reward.units">
            <strong>{{ reward.units }} </strong> left
          </span>
        </div>
      </div>
      <p class="info-reward-description">{{ reward.description }}</p>
      <span class="info-reward-units_bottom" v-if="reward.units">
        <strong>{{ reward.units }} </strong> left
      </span>
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
}
.radio-and-labels {
  display: flex;
}
.labels {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
.radio-button {
  appearance: none;
  width: 21px;
  height: 21px;
  margin-right: 15px;
  border-radius: 50%;
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
.info-header {
  display: flex;
  font-weight: $bolder;
  line-height: 1;
  vertical-align: middle;
  justify-content: space-between;
}
.info-header-label {
  margin-right: 1rem;
}
.info-reward-units_right {
  flex: 1;
  text-align: end;
}
.info-reward-units_bottom {
  display: none;
}
.info-header-pledge {
  font-weight: $bolder;
  color: $moderate-cyan;
  margin-bottom: 0;
}
@media screen and (max-width: $tablet) {
  .info-reward-units_right {
    display: none;
  }
  .info-reward-units_bottom {
    display: inline;
  }
}
</style>
