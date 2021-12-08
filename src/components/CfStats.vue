<template>
  <div class="stat">
    <big-text class="big-text">{{ totalRaised }}</big-text
    >of $100,000 backed
  </div>
  <cf-horizontal-sep />
  <cf-vertical-sep />
  <div class="stat">
    <big-text class="big-text">{{ backerCount }}</big-text> total backers
  </div>
  <cf-horizontal-sep />
  <cf-vertical-sep />
  <div class="stat">
    <big-text class="big-text">{{ daysLeft }}</big-text> days left
  </div>
</template>

<script>
const MS_PER_DAY = 1000 * 60 * 60 * 24;
export default {
  name: "CfStats",
  props: {
    totalRaised: Number,
    backerCount: Number,
  },
  data() {
    return {
      MS_PER_DAY: MS_PER_DAY,
    };
  },
  computed: {
    daysLeft() {
      let today = new Date();
      let deadline = new Date("2022, 01, 09");
      return Math.ceil((deadline - today) / this.MS_PER_DAY);
    },
  },
};
</script>

<style scoped>
.stat {
  text-align: center;
}
.big-text {
  display: block;
}
</style>
