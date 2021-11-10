<template>
  <div class="home">
    <!-- header -->
    <header class="header">
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain
      </p>
      <button>Back this project</button>
    </header>
    <button>Bookmark/Bookmarked</button>
    <!-- stats -->
    <CFStats />

    <!-- about and rewards -->
    <section class="rewards">
      <div class="description">
        <h2>About this project</h2>
        <p v-for="(paragraph, key) in description" :key="key">
          {{ paragraph }}
        </p>
      </div>
      <!-- reward selection -->
      <reward-card
        v-for="reward in this.rewards"
        :key="reward.id"
        :reward="reward"
      />
      <!-- modal -->
      <button @click="this.showModal = !this.showModal">Toggle Modal</button>
      <pledge-modal v-show="this.showModal" :rewards="this.rewards" />
    </section>
  </div>
</template>

<script>
import CFStats from "./CFStats.vue";
import RewardCard from "./RewardCard.vue";
import PledgeModal from "./PledgeModal.vue";

export default {
  name: "CrowdfundHome",
  components: {
    CFStats,
    RewardCard,
    PledgeModal,
  },
  data() {
    return {
      description: [
        "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.",
        "Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
      ],
      rewards: [
        {
          id: 0,
          description:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list",
          units: 101,
        },
        {
          id: 1,
          name: "Bamboo Stand",
          pledge: 25,
          description:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list",
          units: 101,
        },
        {
          id: 2,
          name: "Black Edition Stand",
          pledge: 75,
          description:
            "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          units: 64,
        },
        {
          id: 3,
          name: "Mahogany Special Edition",
          pledge: 200,
          description:
            "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          units: 0,
        },
      ],
      showModal: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* header {
  button {
    background-color: red;
  }
} */
</style>
