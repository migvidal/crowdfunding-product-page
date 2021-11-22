<template>
  <div class="enter-pledge">
    <p>Enter your pledge</p>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="money">$</label>
        <input type="text" name="money" id="money" />
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
      money: null,
    };
  },
  methods: {
    handleSubmit(e) {
      let value = e.target["money"].value;
      if (value != "" && value >= 0 && value <= 1000) {
        this.money = value;
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
        padding: 10px 40px;
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
