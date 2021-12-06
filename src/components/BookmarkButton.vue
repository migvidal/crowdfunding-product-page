<template>
  <div class="bookmark-wrapper">
    <cf-button
      title="Bookmark"
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
</template>

<script>
export default {
  name: "BookmarkButton",
};
</script>

<style scoped></style>
