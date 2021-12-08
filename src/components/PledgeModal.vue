<template>
  <div class="modal-inner">
    <button class="modal-close-button" @click="this.emitCloseModal()" autofocus>
      <img src="../images/icon-close-modal.svg" aria-hidden="true" />
    </button>
    <h2>Back this project</h2>

    <!-- Radio cards -->
    <reward-radio
      v-for="reward in rewardsCopy"
      :key="reward.id"
      :reward="reward"
      @selectoption="handleSelectOption"
      @valuesubmit="handleSubmit"
    />
  </div>
</template>

<script>
import RewardRadio from "./PledgeModalRadio.vue";

export default {
  name: "PledgeModal",
  emits: ["selectoption", "submitpledge", "modalclose"],

  components: {
    RewardRadio,
  },
  props: {
    rewards: Array,
  },
  data() {
    return {
      rewardsCopy: this.rewards,
      selectedPledge: {
        id: null,
        money: 0,
      },
    };
  },
  methods: {
    emitCloseModal() {
      this.$emit("modalclose");
    },
    handleSelectOption(rewardId) {
      //_/this.$emit("selectoption");
      //_/this.selectedPledge.id = rewardId;
      this.rewardsCopy.forEach((reward) => {
        if (reward.id === rewardId) {
          reward.selected = true;
        } else reward.selected = false;
      });
    },
    handleSubmit(rewardId, money) {
      //_/this.selectedPledge.money = money;
      //_/this.$emit('submitpledge', this.selectedPledge);
      this.rewardsCopy.forEach((reward) => {
        if (reward.id === rewardId) {
          reward.units && reward.units--; // substract units if it has pledge
          this.$emit("submitpledge", reward.id, money); //emits submitted data
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-close-button {
  float: right;
  background: none;
  padding: 0;
  margin: 10px;
}
</style>
