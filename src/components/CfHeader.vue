<template>
  <div class="info">
    <img class="logo" src="../images/logo-mastercraft.svg" alt="" srcset="" />
    <h1>Mastercraft Bamboo Monitor Riser</h1>
    <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain</p>
  </div>
  <div class="action-buttons">
    <cf-button @click="$emit('backprojectclick')" class="back-project">
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
.info {
  margin: 0 1rem;
}
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
  align-items: center;
  justify-content: space-between;
  button {
    &.back-project {
      flex: 1;
      margin-right: 8px;
    }
  }
}
</style>
