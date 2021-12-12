<template>
  <div class="enter-pledge">
    <label class="enter-pledge-label" for="money">Enter your pledge</label>
    <form class="enter-pledge-form" @submit.prevent="handleSubmit">
      <div class="input-group">
        <span class="dollar-sign">$</span>
        <input
          v-model="this.money"
          type="number"
          :min="minPledge"
          max="1000"
          inputmode="numeric"
          name="money"
          id="money"
        />
      </div>
      <cf-button type="submit">Continue</cf-button>
    </form>
  </div>
</template>

<script>
import CfButton from "./CfButton.vue";
export default {
  components: { CfButton },
  name: "MoneyForm",
  props: {
    minPledge: Number,
  },
  data() {
    return {
      money: 0,
    };
  },
  methods: {
    valueIsCorrect(value) {
      if (value != "" && value >= 0 && value <= 1000) {
        return true;
      } else return false;
    },
    handleSubmit() {
      if (this.valueIsCorrect(this.money)) {
        this.$emit("valuesubmit", parseInt(this.money));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.enter-pledge {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #eee;
}
.enter-pledge-form {
  display: flex;
  align-items: center;
}
.enter-pledge-label {
  margin: 0.5rem 0;
  flex: 1;
}
.input-group {
  position: relative;
  margin-right: 10px;
  .dollar-sign {
    position: absolute;
    left: 20px;
    top: 12px;
    font-weight: bold;
    color: $moderate-gray;
  }
  input[type="number"] {
    background: none;
    max-width: 150px;
    padding: 10px;
    padding-left: 40px;

    border: $card-border;
    border-radius: 999px;
    &:focus {
      outline: 2px solid $dark-gray;
    }
  }
}
@media screen and (max-width: $mobile-landscape) {
  .enter-pledge {
    justify-content: space-evenly;
  }
  .enter-pledge-label {
    text-align: center;
    flex-basis: 100%;
  }
}
</style>
