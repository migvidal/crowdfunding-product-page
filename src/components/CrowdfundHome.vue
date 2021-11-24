<template>
  <main class="home">
    <!-- header -->
    <header class="header">
      <img class="logo" src="../images/logo-mastercraft.svg" alt="" srcset="" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain
      </p>
      <div class="action-buttons">
        <button @click="openModal" class="back-project">
          Back this project
        </button>
        <!-- Subscribe/Subscribed -->
        <button class="bookmark">
          <img
            src="../images/icon-bookmark.svg"
            alt="Bookmark"
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
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
        @btnclick="openModal(reward.id)"
      />
      <!-- modal -->
      <pledge-modal
        v-if="this.showModal"
        :rewards="this.rewards"
        @selectoption="resetSelected"
        @modalclose="handleModalClose"
        @submitpledge="updateRewards"
      />
    </section>
  </main>
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
      rewards: [
        {
          id: 0,
          description:
            "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
          raised: 0,
          selected: false,
        },
        {
          id: 1,
          name: "Bamboo Stand",
          raised: 25,
          description:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list",
          units: 101,
          selected: false,
        },
        {
          id: 2,
          name: "Black Edition Stand",
          raised: 75,
          description:
            "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          units: 64,
          selected: false,
        },
        {
          id: 3,
          name: "Mahogany Special Edition",
          raised: 200,
          description:
            "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          units: 0,
          selected: false,
        },
      ],
      showModal: false,
    };
  },
  methods: {
    updateRewards(updatedPledges) {
      console.log(updatedPledges);
      this.rewards = updatedPledges;
    },
    logResult(r) {
      console.log(r);
    },
    openModal(selectedId) {
      this.rewards[selectedId].selected = true;
      /* || false; */
      this.letBodyScroll(false);
      this.showModal = true;
    },
    handleModalClose() {
      this.rewards.forEach((reward) => (reward.selected = false));
      this.letBodyScroll();
      this.showModal = false;
    },
    updateSelected(selectedId) {
      this.rewards.forEach((reward) => {
        let isSelected = reward.id == selectedId;
        reward.selected = isSelected;
      });
    },
    resetSelected() {
      this.rewards.forEach((reward) => {
        reward.selected = false;
      });
    },
    letBodyScroll(scrollable = true) {
      let body = document.getElementsByTagName("body")[0];
      body.classList.remove("no-scroll");
      if (!scrollable) body.classList.add("no-scroll");
    },
  },
};
</script>

<!-- Unscoped styles -->
<style lang="scss">
button {
  border: none;
  border-radius: 999px;
  padding: 1rem;
  white-space: nowrap;
  color: #fff;
  font-weight: bold !important;
  background-color: $moderate-cyan;
  max-width: 230px;
  cursor: pointer;
  &:hover {
    background-color: $dark-cyan;
  }
  &:disabled {
    background-color: #ccc;
  }
  &.back-project {
    flex: 1;
    margin-right: 1rem;
  }
  &.bookmark {
    background: none;
    padding: 0;
  }
}
.display-text {
  font-size: 3rem;
}
.reward {
  border: $card-border;
  border-radius: $radius;
}
</style>
<style lang="scss" scoped>
main.home {
  //for the modal
  position: relative;
  z-index: 10;
  header,
  section {
    //mixin?
    margin: 2rem;
    padding: 2rem;
    border-radius: $radius;
    background-color: #fff;
  }
  header {
    img.logo {
      margin: 0 auto;
      margin-top: -60px;
    }
    h1,
    p {
      text-align: center;
    }

    .action-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>
