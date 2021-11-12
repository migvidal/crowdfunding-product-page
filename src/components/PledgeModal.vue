<template>
  <div class="modal-bg">
    <div class="modal">
      <button @click="closeModal">Close</button>
      <h2>Back this project</h2>
      <reward-radio
        v-for="reward in rewards"
        :key="reward.id"
        :reward="reward"
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
  components: {
    RewardRadio,
    SuccessModal,
  },
  props: {
    rewards: Object,
  },
  data() {
    
  },
  methods: {
    closeModal() {
      this.$emit('modalClosed');
    }
  }
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
    
  }
}
</style>
