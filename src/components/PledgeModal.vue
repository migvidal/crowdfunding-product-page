<template>
  <div class="modal-bg" @keydown.esc="$emit('modalclose')" tabindex="0">
    <div class="modal">
      <button class="modal-close-button" @click="$emit('modalclose')" autofocus>
        <img src="../images/icon-close-modal.svg" aria-hidden="true" />
      </button>
      <h2>Back this project</h2>

      <!-- Radio cards -->
      <reward-radio
        v-for="reward in rewardsCopy"
        :key="reward.id"
        :reward="reward"
        :checked="reward.selected"
        @selectoption="handleSelectOption"
        @valuesubmit="handleSubmit"
      />

      <!-- <success-modal hidden/> -->
    </div>
  </div>
</template>

<script>
import RewardRadio from "./RewardRadio.vue";
import SuccessModal from "./SuccessModal.vue";

export default {
  name: "PledgeModal",
  emits: ["selectoption", "submitpledge"],

  components: {
    RewardRadio,
    SuccessModal,
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
    logResult(r) {
      console.log(r);
    },
    handleSelectOption(rewardId) {
      
      //this.$emit("selectoption");
      //_/this.selectedPledge.id = rewardId;
      this.rewardsCopy.forEach((reward) => {
        if ((reward.id === rewardId)) {
          reward.selected = true;
        } else reward.selected = false;
      });
    },
    handleSubmit(money) {
      //_/this.selectedPledge.money = money;
      //_/this.$emit('submitpledge', this.selectedPledge);
      this.rewardsCopy.raised += money;
      this.$emit("submitpledge", this.rewardsCopy);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-bg {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  //background-color: black;
  .modal {
    position: relative;
    margin: 20px auto;
    padding: 2rem;
    height: 100%;
    width: 90%;
    background-color: white;
    border-radius: $radius;
    overflow: auto;
    button.modal-close-button {
      float: right;
      background: none;
      padding: 0;
      margin: 10px;
    }
  }
}
</style>
