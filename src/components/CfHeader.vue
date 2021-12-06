<template>
  <img class="logo" src="../images/logo-mastercraft.svg" alt="" srcset="" />
  <h1>Mastercraft Bamboo Monitor Riser</h1>
  <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain</p>
  <div class="action-buttons">
    <cf-button @click="openPledgeModal" class="back-project">
      Back this project
    </cf-button>
    <!-- Subscribe/Subscribed -->
    <div class="bookmark-wrapper">
      <cf-button
        title="Bookmark"
        :class="['bookmark', { bookmarked: this.bookmarked }]"
        @click="$emit('bookmarkclick')"
      >
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle fill="" cx="28" cy="28" r="28" />
            <path fill="" d="M23 19v18l5-5.058L33 37V19z" />
          </g>
        </svg>
      </cf-button>
      <div v-show="!this.bookmarked" class="bookmarked-label">Bookmark</div>
      <div v-show="this.bookmarked" class="bookmarked-label">Bookmarked</div>
    </div>
  </div>
</template>

<script>
export default {
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
    &.bookmark {
      display: inline;
      vertical-align: middle;
      background: none;
      padding: 0;
      max-height: 56px; // fit the svg snugly
      z-index: 1;

      svg {
        circle {
          fill: $dark-gray;
        }
        path {
          fill: #fff;
        }
      }

      &.bookmarked {
        svg {
          circle {
            fill: $moderate-cyan;
          }
          path {
            fill: #fff;
          }
        }
      }
    }
  }
}
// Bookmark button special design
.bookmark-wrapper {
  display: flex;
  align-items: center;
  .bookmarked-label {
    background-color: $light-gray;
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
    padding: 12px 20px 12px 35px;
    margin-left: -20px;
    z-index: 0;
    font-weight: $bolder;
  }
}
</style>
