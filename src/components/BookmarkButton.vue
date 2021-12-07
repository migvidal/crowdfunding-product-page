<template>
  <div class="bookmark-btn-wrapper">
    <cf-button :class="['bookmark-btn', { bookmarked: this.bookmarked }]">
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <circle fill="" cx="28" cy="28" r="28" />
          <path fill="" d="M23 19v18l5-5.058L33 37V19z" />
        </g>
      </svg>
    </cf-button>
    <div v-show="!bookmarked" class="bookmark-btn-label">Bookmark</div>
    <div v-show="bookmarked" class="bookmark-btn-label">Bookmarked</div>
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
  padding: 12px 20px 12px 35px;
  margin-left: -20px;
  z-index: 0;
  font-weight: $bolder;
}
.bookmark-btn {
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
@media screen and (max-width: $mobile) {
  .bookmark-btn-label {
    visibility: hidden;
  }
}
</style>
