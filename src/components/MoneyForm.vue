<template>
  <div class="enter-pledge">
    <span>Enter your pledge</span>
    <form class="enter-pledge-form" @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="money">$</label>
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
.input-group {
  position: relative;
  margin-right: 10px;
  label {
    position: relative;
    left: 25px;
    font-weight: bold;
    color: $moderate-gray;
  }
  input[type="number"] {
    background: none;
    width: 150px;
    padding: 10px;
    padding-left: 40px;

    border: $card-border;
    border-radius: 999px;
    &:focus {
      outline: 2px solid $dark-gray;
    }
  }
}
</style>
