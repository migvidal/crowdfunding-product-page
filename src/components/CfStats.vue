<template>
  <div class="stats-container">
    <div class="stat">
      <big-text class="big-text">{{ totalRaised }}</big-text
      >of $100,000 backed
    </div>
    <cf-horizontal-sep class="horizontal-sep" />
    <cf-vertical-sep class="vertical-sep" />

    <div class="stat">
      <big-text class="big-text">{{ backerCount }}</big-text> total backers
    </div>

    <cf-horizontal-sep class="horizontal-sep" />
    <cf-vertical-sep class="vertical-sep" />

    <div class="stat">
      <big-text class="big-text">{{ daysLeft }}</big-text> days left
    </div>
  </div>
</template>

<script>
import CfHorizontalSep from "./CfHorizontalSep.vue";
const MS_PER_DAY = 1000 * 60 * 60 * 24;
export default {
  components: { CfHorizontalSep },
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
      let deadline = new Date("10 Feb 2022");
      return Math.ceil((deadline - today) / this.MS_PER_DAY);
    },
  },
};
</script>

<style lang="scss" scoped>
.stats-container {
  display: flex;
  justify-content: space-evenly;
}
.big-text {
  display: block;
}
.horizontal-sep {
  display: none;
}

@media screen and (max-width: $mobile) {
  .stats-container {
    flex-direction: column;
  }
  .stat {
    text-align: center;
  }
  .horizontal-sep {
    display: initial;
    width: 100px;
  }
  .vertical-sep {
    display: none;
  }
}
</style>
