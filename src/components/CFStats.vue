<template>
  <section class="stats">
    <div><strong> x </strong>of $100,000 backed</div>
    <div><strong>x</strong> total backers</div>
    <div>
      <strong>{{ daysLeft }}</strong> days left
    </div>
  </section>
</template>

<script>
const MS_PER_DAY = 1000 * 60 * 60 * 24;
export default {
  name: "CFStats",
  props: {
    moneyBacked: Number,
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

<style scoped></style>
