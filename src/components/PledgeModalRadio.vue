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
      <div class="radio-header" :for="inputID">
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
        <div class="labels">
          <label class="label" :for="inputID">
            {{ reward.name || "Pledge with no reward" }}
          </label>
          <span class="pledge" v-if="reward.minPledge">
            Pledge ${{ reward.minPledge }} or more
          </span>
          <span class="reward-units_right" v-if="reward.units">
            <strong>{{ reward.units }} </strong> left
          </span>
        </div>
      </div>
      <div class="info">
        <p class="info-reward-description">{{ reward.description }}</p>
        <span class="reward-units_bottom" v-if="reward.units">
          <strong>{{ reward.units }} </strong> left
        </span>
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
  name: "PledgeModalRadio",
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

.radio-header {
  display: flex;
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
.labels {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
.label {
  margin-right: 1rem;
  font-weight: $bolder;
}
.pledge {
  color: $moderate-cyan;
  margin-bottom: 0;
  font-weight: $bolder;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 41px;
}
.reward-units_right {
  display: inline;
  flex: 1;
  text-align: end;
}
.reward-units_bottom {
  display: none;
}

@media screen and (max-width: $tablet) {
  .info {
    margin-left: initial;
  }
  .reward-units_right {
    display: none;
  }
  .reward-units_bottom {
    display: inline;
  }
}
</style>
