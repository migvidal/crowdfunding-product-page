<template>
  <img class="logo" src="../images/logo-mastercraft.svg" alt="" srcset="" />
  <h1>Mastercraft Bamboo Monitor Riser</h1>
  <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain</p>
  <div class="action-buttons">
    <cf-button @click="openPledgeModal" class="back-project">
      Back this project
    </cf-button>
    <!-- Bookmark -->
    <bookmark-button
      :bookmarked="this.bookmarked"
      @click="$emit('bookmarkclick')"
    ></bookmark-button>
  </div>
</template>

<script>
import BookmarkButton from "./BookmarkButton.vue";
export default {
  components: { BookmarkButton },
  name: "CfHeader",

  props: {
    bookmarked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<!-- Scoped styles -->
<style lang="scss" scoped>
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
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    &.back-project {
      flex: 1;
      margin-right: 1rem;
    }
  }
}
</style>
