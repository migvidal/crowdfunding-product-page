<template>
  <div class="bookmark-btn-wrapper">
    <cf-button id="bookmark-btn" :class="{ bookmarked: this.bookmarked }">
      <svg
        width="52"
        height="52"
        viewBox="0 0 56 56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <circle fill="" cx="28" cy="28" r="28" />
          <path fill="" d="M23 19v18l5-5.058L33 37V19z" />
        </g>
      </svg>
    </cf-button>
    <label v-show="!bookmarked" class="bookmark-btn-label">Bookmark</label>
    <label v-show="bookmarked" class="bookmark-btn-label">Bookmarked</label>
  </div>
</template>

<script>
export default {
  name: "BookmarkButton",
  props: {
    bookmarked: { type: Boolean, default: true },
  },
};
</script>

<style lang="scss" scoped>
.bookmark-btn-wrapper {
  display: flex;
  align-items: center;
}
.bookmark-btn-label {
  background-color: $light-gray;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  padding: 10px 16px 10px 30px;
  margin-left: -20px;
  z-index: 0;
  font-weight: $bolder;
}
#bookmark-btn {
  display: inline;
  vertical-align: middle;
  background: none;
  padding: 0;
  max-height: 56px; // fit the svg snugly
  z-index: 1;
  svg {
    vertical-align: middle;
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
@media screen and (max-width: $mobile-landscape) {
  .bookmark-btn-label {
    display: none;
  }
}
</style>
