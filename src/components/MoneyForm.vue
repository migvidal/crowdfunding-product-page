<template>
  <div class="enter-pledge">
    <p>Enter your pledge</p>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="money">$</label>
        <input type="number" min="1" max="1000" inputmode="numeric" name="money" id="money" />
      </div>
      <button type="submit">Continue</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MoneyForm",
  data() {
    return {
    };
  },
  methods: {
    valueIsCorrect(value) {
      if (value != "" && value >= 0 && value <= 1000) {
        return true;
      } else return false;
    },
    handleSubmit(e) {
      let value = e.target["money"].value;
      if (this.valueIsCorrect(value)) {
        this.$emit('valuesubmit', parseInt(value));
      }
      
    },
  },
};
</script>

<style lang="scss" scoped>
.enter-pledge {
  display: flex;
  flex-wrap: wrap;
  border-top: 2px solid #eee;
  form {
    display: flex;
    flex-wrap: wrap;
    .input-group {
      position: relative;
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
  }
}
</style>
