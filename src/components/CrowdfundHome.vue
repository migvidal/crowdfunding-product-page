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
        <button @click="openPledgeModal" class="back-project">
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
    <CFStats :totalRaised="this.totalRaised" :backerCount="this.backerCount" />

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
        @btnclick="openPledgeModal(reward.id)"
      />
      <!-- modal -->
      <pledge-modal
        v-if="this.pledgeModalVisible"
        :rewards="this.rewards"
        @selectoption="resetSelected"
        @modalclose="handleModalClose"
        @submitpledge="updateRewards"
      />
      <!-- success modal -->
      <success-modal
        v-if="this.successModalVisible"
        @modalclose="handleModalClose"
      />
    </section>
  </main>
</template>

<script>
import CFStats from "./CFStats.vue";
import RewardCard from "./RewardCard.vue";
import PledgeModal from "./PledgeModal.vue";
import SuccessModal from "./SuccessModal.vue";

export default {
  name: "CrowdfundHome",
  components: {
    CFStats,
    RewardCard,
    PledgeModal,
    SuccessModal,
  },
  data() {
    return {
      description: [
        "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.",
        "Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
      ],
      backerCount: 0,
      totalRaised: 0,
      rewards: [
        {
          id: 0,
          description:
            "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
          selected: false,
        },
        {
          id: 1,
          name: "Bamboo Stand",
          description:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list",
          units: 101,
          minPledge: 25,
          selected: false,
        },
        {
          id: 2,
          name: "Black Edition Stand",
          description:
            "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          units: 64,
          minPledge: 75,
          selected: false,
        },
        {
          id: 3,
          name: "Mahogany Special Edition",
          description:
            "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          units: 0,
          minPledge: 100,
          selected: false,
        },
      ],
      pledgeModalVisible: false,
      successModalVisible: false,
    };
  },
  computed: {
    /* totalRaised() {}, */
  },
  methods: {
    updateRewards(id, money) {
      //update data
      this.rewards.forEach((reward) => {
        if (reward.id === id) {
          this.totalRaised += money; // add to total
          reward.units && reward.units--; // substract units if it has pledge
          this.backerCount++;
        }
      });
      // show success modal
      this.letBodyScroll(false);
      this.handleModalClose();
      this.successModalVisible = true;
    },
    logResult(r) {
      console.log(r);
    },
    openPledgeModal(selectedId) {
      if (!isNaN(Number.parseInt(selectedId))) {
        this.rewards[selectedId].selected = true;
      }
      this.letBodyScroll(false);
      this.pledgeModalVisible = true;
    },

    handleModalClose() {
      this.rewards.forEach((reward) => (reward.selected = false));
      this.letBodyScroll();
      this.pledgeModalVisible = false;
      this.successModalVisible = false;
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
    cursor: default;
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
//for the modal
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

    width: 90%;
    background-color: white;
    border-radius: $radius;
    overflow: auto;
  }
}
</style>
<style lang="scss" scoped>
main.home {
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
