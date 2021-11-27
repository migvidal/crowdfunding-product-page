<template>
  <section class="stats">
    <div>
      <strong class="display-text">{{ totalRaised }}</strong
      >of $100,000 backed
    </div>
    <div>
      <strong class="display-text">{{ backerCount }}</strong> total backers
    </div>
    <div>
      <strong class="display-text">{{ daysLeft }}</strong> days left
    </div>
  </section>
</template>

<script>
const MS_PER_DAY = 1000 * 60 * 60 * 24;
export default {
  name: "CFStats",
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
      let deadline = new Date("2021, 11, 09");
      return Math.ceil((deadline - today) / this.MS_PER_DAY);
    },
  },
};
</script>

<style lang="scss" scoped>
section.stats {
  text-align: center;
  strong.display-text {
    display: block;
  }
}
</style>
